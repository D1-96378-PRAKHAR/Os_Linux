FROM node:20-alpine

WORKDIR /app

# Copy package files first to leverage Docker caching
COPY package*.json ./

# Install ALL dependencies (including devDependencies like nodemon)
RUN npm ci

# Copy the rest of your application code
COPY . .

# Expose your Express port
EXPOSE 3000

# Start the application using nodemon or your npm dev script
CMD ["npm", "start"]

