FROM node:16.14.0

WORKDIR /home/node/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE $PORT

ENV PORT=$PORT

CMD [ "npm" , "run" , "start" ]
