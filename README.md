<h1 align=center>Dockette / Proxychain</h1>

<p align=center>
   🎁 Dockerized proxychain forward proxy based on <a href="https://github.com/apify/proxy-chain/tree/master">proxy-chain</a> library.
</p>

<p align=center>
🕹 <a href="https://f3l1x.io">f3l1x.io</a> | 💻 <a href="https://github.com/f3l1x">f3l1x</a> | 🐦 <a href="https://twitter.com/xf3l1x">@xf3l1x</a>
</p>

<p align=center>
  <a href="https://hub.docker.com/r/dockette/nexus/"><img src="https://badgen.net/docker/pulls/dockette/nexus"></a>
  <a href="https://bit.ly/ctteg"><img src="https://badgen.net/badge/support/gitter/cyan"></a>
  <a href="https://github.com/sponsors/f3l1x"><img src="https://badgen.net/badge/sponsor/donations/F96854"></a>
</p>

-----

## Usage

```
docker run \
  -it \
  --rm \
  -p 8000:8000 \
  -e PROXY_PROXYLIST=1.2.3.4:8000 \
  dockette/proxychain
```

## Documentation

- `PROXY_PORT` - default(8000) - Server listed on
- `PROXY_VERBOSE` - default(false) - More verbose mode
- `PROXY_AUTH_USER` - default (null) - Basic auth
- `PROXY_AUTH_PASSWORD` - default(null) - Basic auth
- `PROXY_PROXYLIST` - default([]) - List of forward proxies

## Development

See [how to contribute](https://contributte.org/contributing.html) to this package.

This package is currently maintaining by these authors.

<a href="https://github.com/f3l1x">
    <img width="80" height="80" src="https://avatars2.githubusercontent.com/u/538058?v=3&s=80">
</a>

-----

Consider to [support](https://github.com/sponsors/f3l1x) **f3l1x**. Also thank you for using this package.
