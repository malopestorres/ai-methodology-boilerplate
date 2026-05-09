# Dockerfile para backend Node.js com AI-first methodology
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --production

# Copy source code
COPY src ./src

# Expor porta
EXPOSE 3001

# Comando de inicialização
CMD ["npm", "start"]