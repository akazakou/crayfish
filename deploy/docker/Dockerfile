FROM node:lts as base
# copy source files and install dependencies
WORKDIR /app

###
# Make dependencies stage
###
FROM base AS dependencies
COPY package.json package-lock.json /app/
RUN npm ci

###
# Make release stage
###
FROM base AS release
# copy production node_modules
COPY --from=dependencies /app/node_modules ./node_modules
COPY package.json package-lock.json /app/
COPY ./src/ /app/src

# starting container
CMD [ "npm", "run", "start"]
