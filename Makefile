DOCKER_IMAGE=dockette/proxychain

.PHONY: build
build:
	docker build -t ${DOCKER_IMAGE} .

.PHONY: run
run: 
	docker run -it --rm -p 8080:8080 ${DOCKER_IMAGE}
