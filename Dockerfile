FROM node
RUN npm install -g firebase-tools
RUN npm install -g vite
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install --silent
COPY . /usr/src/app
EXPOSE 5173
CMD [ "npm","run", "dev" ]