# NodeJS: Test application
---
  > Test environment: Ubuntu 16.04
  
  > NodeJS version: 8.x
  
  > Docker version: 17.x
  
  > Docker Compose version: 1.18
  
  > Create docker hub account
  
## Application architecture
- Web application:
  - Config: use environment variables to config application
    - `APPLICATION_PORT`: optional
    - `USERNAME` : required
    - `PASSWORD` : required
    - `DB_URL` : required to use database
  
- Mongo database:
  - Config: use default config

1. Create the following shell scripts:
- `provision.sh`: 
  > install system dependencies
  - docker
  - docker compose
  - git 
  - node js && npm
- `test.sh`:
> run application tests

- `build.sh`: 
  > build docker image
- `deploy.sh`:
  > push docker image to private repository

- `run.sh`: 
  > start docker compose environment
- `pipeline.sh`:
  > deploy tested application 
- `clean.sh`:
  >  clean project. delete `node_modules` and remove running containers
---
> Only web application should be exposed!

2. Create a development environment using docker compose
> Docker compsose should be installed by now !

  > build images

3. Create a production environment using docker compose
  > Docker compsose should be installed by now !

  > pull images
