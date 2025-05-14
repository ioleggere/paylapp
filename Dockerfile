FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY src ./src

EXPOSE 3000

CMD ["npm", "run", "dev"]