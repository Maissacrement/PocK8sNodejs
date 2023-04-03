#!make
VERSION=0.0.2

env ?= .env
include $(env)
export $(shell sed 's/=.*//' $(env))

version:
	@echo $(VERSION)

login:
	@docker login $(DOCKER_REPO)

build:
	@docker build -t $(APP_NAME) .

dev: version build
	@docker run -it --rm -p $(BACKEND_PORT):$(BACKEND_PORT) --name $(APP_NAME) --env-file=.env $(APP_NAME)

tag-latest:
	@echo 'create tag latest'
	@docker tag $(APP_NAME) $(DOCKER_REPO)/$(REPO_NAME):latest

tag-version:
	@echo 'create tag $(VERSION)'
	@docker tag $(APP_NAME) $(DOCKER_REPO)/$(REPO_NAME):$(VERSION)

push: version login build tag-version tag-latest
	@echo 'publish $(VERSION) to $(DOCKER_REPO)'
	@docker push $(DOCKER_REPO)/$(REPO_NAME):$(VERSION)
	@docker push $(DOCKER_REPO)/$(REPO_NAME):latest

pull:
	@docker pull $(DOCKER_REPO)/$(REPO_NAME):latest

prod: pull
	@docker run -it --rm -p $(BACKEND_PORT):$(BACKEND_PORT) --name $(APP_NAME) --env-file=.env $(DOCKER_REPO)/$(REPO_NAME):latest