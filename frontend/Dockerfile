# استفاده از تصویر رسمی Node.js
FROM node:18

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install
# RUN npm install --no-cache

COPY . /app/

# پورت 3000 را باز می‌کنیم
EXPOSE 3000

CMD ["npm", "run", "dev"]
