# syntax=docker/dockerfile:1

# 1) Build the static export (produces /app/out via `output: 'export'`).
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# 2) Serve the static files with nginx. No Node.js / next-server at runtime,
#    so there is no server-side code-execution surface to exploit.
FROM nginx:alpine AS runner
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
