# Stage 1
FROM node:18.16.1 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/fs /usr/share/nginx/html