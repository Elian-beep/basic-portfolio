FROM node:14

RUN mkdir /port_frontend

WORKDIR /port_frontend

COPY ./package.json /port_frontend

COPY ./yarn.lock /port_frontend

COPY .next /port_frontend

RUN yarn install

COPY . /port_frontend

CMD ["yarn", "run", "dev"]
