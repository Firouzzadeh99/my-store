FROM node:20.18.1-alpine3.21

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD ["npm", "run", "dev"]
