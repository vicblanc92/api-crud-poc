FROM node:14

WORKDIR /index

COPY package*.json ./

RUN npm install 

COPY . . /index/

EXPOSE 5000

CMD ["npm", "start"]