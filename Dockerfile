# base image
FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

CMD npm start

# RUN mkdir /app
# WORKDIR /app
# # RUN npm install -g yarn nodemon
# COPY package.json package.json
# COPY yarn.lock yarn.lock
# RUN yarn install
# COPY . .
# LABEL maintainer="You "
# CMD yarn start