# Use the official Node.js 20.12.1 image as the base image
FROM node:20.12.1

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Clear Next.js cache and build the application
RUN rm -rf .next && \
    npm run build

# Expose the port your Next.js application is listening on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]