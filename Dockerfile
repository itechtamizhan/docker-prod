FROM node:carbon
WORKDIR /app
RUN npm install
COPY . /app
EXPOSE 6000
CMD node index.js
