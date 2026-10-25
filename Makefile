DOCKER_IMAGE=dockette/proxychain

include VERSION

.PHONY: build
build:
	docker build -t ${DOCKER_IMAGE} .

.PHONY: run
run: 
	docker run -it --rm -p 8080:8080 ${DOCKER_IMAGE}

.PHONY: version
version:
	@echo ${VERSION}

.PHONY: release
release:
	@sed -i.bak "s/^VERSION=.*/VERSION=$$(date -u +%Y.%m.%d)/" VERSION && rm VERSION.bak
	@cat VERSION
