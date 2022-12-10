FROM node:18.12-slim

USER node

WORKDIR /home/node/app

CMD [ "./.docker/start.dev.sh" ]
