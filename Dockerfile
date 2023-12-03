# # pull official base image
# FROM node:16 AS builder

# # set working directory
# WORKDIR /app


# # install app dependencies
# #copies package.json and package-lock.json to Docker environment
# COPY package.json ./

# # Installs all node packages
# RUN npm install


# # Copies everything over to Docker environment
# COPY . ./
# RUN npm run build

# #Stage 2
# #######################################
# #pull the official nginx:1.19.0 base image
# FROM nginx:latest
# #copies React to the container directory
# # Set working directory to nginx resources directory
# COPY --from=builder /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static resources
# RUN rm -rf ./*
# # Copies static resources from builder stage
# COPY --from=builder /app/build .
# EXPOSE 80
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

FROM node:18 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN yarn install && yarn build

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]