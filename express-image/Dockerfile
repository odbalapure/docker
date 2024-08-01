# Use existing docker image as a base
FROM node:14-alpine

# Specify a working directory
WORKDIR /usr/app

# From local FS to the FS inside of the temp container created during the build process
COPY ./ ./

# Download and install dependencies
RUN npm install

# Tell the image what to do when it starts as a container
CMD ["npm", "start"]