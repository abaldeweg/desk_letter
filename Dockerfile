# build stage
FROM node:lts-alpine as build-stage

WORKDIR /usr/app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
RUN yarn components:generate

RUN yarn build

# production stage
FROM httpd:2.4 as production-stage

COPY ./docker/httpd.conf /usr/local/apache2/conf/httpd.conf

COPY --from=build-stage /usr/app/dist /usr/local/apache2/htdocs

EXPOSE 80
