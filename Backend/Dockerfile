FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

# RUN npm run sync-db

EXPOSE 9000

CMD ["npm", "start"]