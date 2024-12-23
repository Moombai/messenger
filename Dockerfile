FROM node:20.12.2-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY .env ./
COPY . .

RUN npm install
EXPOSE 8080
CMD npm start