FROM node:18-buster

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4005

CMD ["npm", "start"]