FROM node:latest

COPY . /app
WORKDIR /app
RUN yarn

ENTRYPOINT ["yarn", "start"]
