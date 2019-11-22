### STAGE 1: Build ###
FROM node:12.10.0-alpine as builder

WORKDIR /client

COPY client/package.json client/package-lock.json .babelrc ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force && npm install

COPY ./public ./public
COPY ./client ./client
COPY ./webpack ./webpack

RUN npm run webpack:prod

### STAGE 2: Setup ###
FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /client/public /usr/share/nginx/html
COPY --from=builder /client/dist /usr/share/nginx/html/dist
CMD ["nginx", "-g", "daemon off;"]