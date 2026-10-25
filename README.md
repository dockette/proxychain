<h1 align=center>Dockette / Proxychain</h1>

<p align=center>
   🎁 Forward proxy that chains other proxies.
</p>

<p align=center>
🕹 <a href="https://f3l1x.io">f3l1x.io</a> | 💻 <a href="https://github.com/f3l1x">f3l1x</a> | 🐦 <a href="https://twitter.com/xf3l1x">@xf3l1x</a>
</p>

<p align=center>
  <a href="https://github.com/dockette/proxychain/actions"><img src="https://github.com/dockette/proxychain/actions/workflows/docker.yml/badge.svg"></a>
  <a href="https://hub.docker.com/r/dockette/proxychain/"><img src="https://badgen.net/docker/pulls/dockette/proxychain"></a>
  <a href="https://github.com/sponsors/f3l1x"><img src="https://badgen.net/badge/sponsor/donations/F96854"></a>
  <a href="https://github.com/orgs/dockette/discussions"><img src="https://badgen.net/badge/support/discussions/blue"></a>
</p>

-----

Dockerized forward proxy based on the [proxy-chain](https://github.com/apify/proxy-chain/tree/master) library.

## Usage

```sh
docker run -it --rm -p 8000:8000 -e PROXY_PROXYLIST=1.2.3.4:8000 dockette/proxychain:latest
```

## Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PROXY_PORT` | `8000` | Port the server listens on |
| `PROXY_VERBOSE` | `false` | More verbose mode |
| `PROXY_AUTH_USER` | `null` | Basic auth user |
| `PROXY_AUTH_PASSWORD` | `null` | Basic auth password |
| `PROXY_PROXYLIST` | `[]` | List of forward proxies |

## Versions

| Version | Release |
|---------|---------|
| `dockette/proxychain:YYYY.MM.DD` | release `YYYY.MM.DD` |
| `dockette/proxychain:latest` | latest build of `master` |

Releases are listed on [GitHub](https://github.com/dockette/proxychain/releases).

## Development

```sh
make build          # build the image
make run            # run the proxy, publishing port 8080
make version        # print VERSION
make release        # set today's date in VERSION
```

## Maintenance

See [how to contribute](https://github.com/dockette/.github/blob/master/CONTRIBUTING.md) to this package. Consider to
[support](https://github.com/sponsors/f3l1x) **f3l1x**. Thank you for using this package.
