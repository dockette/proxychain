DOCKER_IMAGE=dockette/proxychain
VERSION:=$(shell cat VERSION)

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
	@date -u +%Y.%m.%d > VERSION
	@echo "VERSION: ${VERSION} -> $$(cat VERSION)"
	@echo "next: git commit -am \"Release: $$(cat VERSION)\" && git push"
