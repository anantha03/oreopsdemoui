FROM node:latest as build

WORKDIR /app

COPY ./ /app/

RUN npm install
ENV Backend_IP=apiurl:3000
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx:latest

COPY --from=build /app/dist/out/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80