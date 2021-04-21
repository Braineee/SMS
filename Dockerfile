FROM node:slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD npm run create-db && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && npm run dev