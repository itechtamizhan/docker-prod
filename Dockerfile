FROM node:carbon
WORKDIR /app
run npm install
COPY . /app
EXPOSE 5000
CMD node index.js
