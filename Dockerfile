# Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM node:20-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 appgroup \
    && adduser -D -u 1001 -G appgroup appuser

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set permissions
RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000

CMD ["npm", "start"]
