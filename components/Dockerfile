
FROM node:12.16.1-alpine

ARG APP_DIR=/usr/src/acerinidesigns.com

# Create app source directory
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# update image deps
RUN apk update && apk upgrade
RUN apk add git

# Set env variables and ports
ENV HOST 0.0.0.0
ENV NUXT_PORT 8000
EXPOSE $NUXT_PORT

# Copy npm resources and run npm install first for better caching
COPY ./package.json ./package-lock.json ${APP_DIR}/
RUN npm install

# copy the app, note .dockerignore
COPY . ${APP_DIR}/

# Install npm dependencies and build app
RUN npm run build

# start the app
CMD [ "npm", "start" ]
