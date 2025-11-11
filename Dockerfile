# 1️⃣ Use official Node.js LTS image
FROM node:18-alpine AS builder

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4️⃣ Copy all source code
COPY . .

# 5️⃣ Build the Next.js app
RUN npm run build

# 6️⃣ Production image
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only required files from the builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Expose the Next.js default port
EXPOSE 3000

# 7️⃣ Start the app
CMD ["npm", "start"]
