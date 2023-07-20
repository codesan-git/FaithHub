FROM node:16-alpine
RUN npm install -g pnpm
RUN mkdir -p /app
WORKDIR /app
COPY prisma ./prisma/
COPY . .
RUN pnpm install
RUN npx prisma generate
RUN pnpm run build
EXPOSE 3000
CMD ["pnpm", "start"]