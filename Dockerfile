FROM node:carbon
WORKDIR /app
COPY . /app
EXPOSE 5000
CMD node index.js
