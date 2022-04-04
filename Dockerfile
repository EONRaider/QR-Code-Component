# node:16-alpine
FROM node@sha256:5e20a4e2e52daa1743006c224f2971b1218201e284d17c6eff4a696c9020f1a2

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production && npm cache clean --force

ENV NODE_ENV production

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 3000