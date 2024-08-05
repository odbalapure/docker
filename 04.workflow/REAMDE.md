# Creating Workflows

It is better to create 2 Dockerfile, one for dev and another one for prod.

To build an image with a specific Dockerfile use:

$ docker build -f Dockerfile.dev .

No as always use the hash/image ID to run the container

$ docker run -p 3000:3000 <hash>

**NOTE**: To look for the image size search something like

⇒ transferring context: 302.93MB

## Docker Volume

- To avoid re-building image after making coding changes we can use docker volumes.
- Volume references our source code instead so there is no need to copy the **src** folder.
- This is sort of similar to the PORT mapping, only difference is we are mapping folder inside a container to a folder outside the container.

```
Docker volumes are a mechanism for persisting and managing data in Docker containers.
When you run a container, its filesystem is temporary and ephemeral by default—meaning any data stored inside the container will be lost if the container is removed.
Volumes help overcome this limitation by providing a way to store data outside the container's lifecycle.
```

Reference volumes

docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>

**NOTE**:
- We can to specify the project path instead of using pwd
- We need to specify -v /app/node_modules as well, what if we delete the node_modules and run the docker container
