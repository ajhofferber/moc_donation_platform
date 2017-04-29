FROM node:6.9

RUN mkdir /code
WORKDIR /code

# Yarn
RUN apt-get update && \
    apt-get install apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install yarn

COPY client/package.json /code
COPY client/yarn.lock /code
RUN yarn

VOLUME /code/node_modules
ENV PATH /code/node_modules/.bin:$PATH
