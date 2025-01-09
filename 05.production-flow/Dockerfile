FROM node:16-alpine as builder

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# The default command for the nginx container is already set to run nginx, so no need to explicitly set it.
# CMD ["nginx", "-g", "daemon off;"]  # This is the default in nginx:alpine
