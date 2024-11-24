FROM node:20.12.1

# Set build arguments and environment variables
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG NEXT_PUBLIC_SHEET_URL
ENV NEXT_PUBLIC_SHEET_URL=${NEXT_PUBLIC_SHEET_URL}

WORKDIR /src

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev dependencies)
RUN npm install --production=false

# Copy the rest of the application
COPY . .

# Clear cache and build
RUN rm -rf .next && \
    npm run build

# Remove dev dependencies for production
RUN npm prune --production

EXPOSE 3000

CMD ["npm", "start"]