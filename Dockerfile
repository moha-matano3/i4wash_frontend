# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build   # Produces /app/dist

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the dist folder to Nginx's default HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx config to change the listening port
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]