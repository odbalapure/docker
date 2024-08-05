# Compose

- CLI that gets installed along with Docker.
- Start multiple containers at once.
- Automate the long arguments, we pass to ‘docker run’.

## A simple yaml file

Docker will create 2 containers for redis and node on the same network

```yaml
version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    build: .
    ports:
      - "8081:8081"
```

```docker
FROM node:alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "start"]
```

We are referencing **build: .** in the yaml file because we are creating a custom image for our express app.

**NOTE**: Multiple ports can be mapped for a single container.

## Compose commands

To start multiple containers using docker compose use

$ docker-compose up

If changes are made to the source code files, rebuild the container using 

$ docker-compose up —build

To run docker-compose in the background

$ docker-compose up -d

Stop docker-compose

$ docker-compose down

## Restart policies

There are some restart policies we have access to

- **no**: Never attempt to restart
    - The **no** in yaml means a boolean flag, so specify it as a string — ‘no’
- **always**: For any reason restart the container
    - Simulate using process.exit(0) → success code
    - Used for web apps which needs to be always available
- **on-failure**: Only restart if container stops with an error code
    - Simulate using process.exit(1) → exit code
    - Used for containers running worker process, say process a file, that runs for some time and naturally exits
- **unless-stopped**: Always restart unless developers forcibly stop it

## List processes

List docker container processes

$ docker-compose ps

**NOTE**: The command works in the directory where the docker-compose up was run.

## Provide name to the root container

$ docker compose -p <container_name> up