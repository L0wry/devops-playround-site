FROM node:9.11.1
COPY . /app
WORKDIR /app
RUN yarn install
ENTRYPOINT yarn start