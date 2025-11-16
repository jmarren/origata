
# we are using node 18 in production
FROM node:22-alpine AS base

# set /app as the working directory in container
WORKDIR /app

# copy in dependency files
COPY package*.json ./


# install dependencies
RUN npm i


# copy in application code
COPY . .

# VOLUME /app/.next/cache
# start app
CMD ["npm", "run", "dev"]
