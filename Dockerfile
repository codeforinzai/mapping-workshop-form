FROM node:erbium-buster-slim

WORKDIR /usr/src/app
ENV NUXT_HOST 0.0.0.0
ENV API_URL /

COPY . .

ARG spreadsheetid

RUN yarn install --frozen-lockfile && \
  yarn build

EXPOSE 3000

CMD ["yarn", "start"]
