const ProxyChain = require("proxy-chain");

const CONFIG = {
  PORT: process.env.PROXY_PORT || 8000,
  VERBOSE: process.env.PROXY_VERBOSE || false,
  AUTH_USER: process.env.PROXY_AUTH_USER || null,
  AUTH_PASSWORD: process.env.PROXY_AUTH_PASSWORD || null,
  PROXYLIST: Array.from(new String(process.env.PROXY_PROXYLIST || "").split(/,|\||\n/)).filter((p) => p),
};

if (CONFIG.PROXYLIST.length <= 0) {
  console.error(`No PROXYLIST given. Example ENV.PROXYLIST=http://1.2.3.4:8080|http://5.6.7.8:8080`);
  process.exit(255);
}

const server = new ProxyChain.Server({
  port: CONFIG.PORT,
  verbose: CONFIG.VERBOSE,
  prepareRequestFunction: ({ username, password }) => {
    const prepare = {
      upstreamProxyUrl: CONFIG.PROXYLIST[Math.floor(Math.random() * CONFIG.PROXYLIST.length)],
    };

    if (CONFIG.AUTH_USER && CONFIG.AUTH_PASSWORD) {
      prepare.requestAuthentication = username !== CONFIG.AUTH_USER || password !== CONFIG.AUTH_PASSWORD;
    }

    return prepare;
  },
});

server.listen(() => {
  console.log(`Proxy server is listening on port ${server.port}.`);
  console.log(`List of proxies:`);
  console.dir(CONFIG.PROXYLIST);
});

server.on("connectionClosed", ({ connectionId, stats }) => {
  console.log(`Connection ${connectionId} closed`);
  console.dir(stats);
});

server.on("requestFailed", ({ request, error }) => {
  console.log(`Request ${request.url} failed`);
  console.error(error);
});
