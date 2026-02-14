# Test Task

Проект на [Next.js](https://nextjs.org) 16 с React 19, Redux Toolkit, Framer Motion и Swiper.

Live: https://task-nft-cards-layout.vercel.app/

## Требования

- [Docker](https://www.docker.com/products/docker-desktop/) и Docker Compose

## Запуск через Docker

```bash
docker compose up --build
```

Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000)

Для запуска в фоновом режиме:

```bash
docker compose up --build -d
```

Для остановки:

```bash
docker compose down
```

## Локальная разработка (без Docker)

Требования: [Node.js](https://nodejs.org) 22+

```bash
npm install
npm run dev
```

Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000)
