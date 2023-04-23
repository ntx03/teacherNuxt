FROM node:18.15.0

WORKDIR /

COPY package.json .

RUN npm install

RUN npm run build

COPY /.output .

EXPOSE 3000

CMD ["node", "server/index.mjs"]
