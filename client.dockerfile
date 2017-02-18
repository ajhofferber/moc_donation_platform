FROM node:6.9

RUN mkdir /code

WORKDIR /code

RUN npm install -g angular-cli
COPY ./client/package.json /code/package.json
RUN npm install --loglevel warn

VOLUME /code/node_modules
