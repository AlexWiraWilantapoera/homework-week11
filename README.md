# CI/CD & Unit Testing

## Topic
- Implement CI/CD using Github Actions
- Implement Unit Testing using Jest
- Implement Docker

## Requirement
To run this project you must have installed several things below on your pc:
- NodeJs
- PostgreSQL
- NPM
- VisualStudioCode (or other IDE)

## Getting Started
### There are two ways to run this project:
#### 1. Run this project using `Docker`:
```sh
docker compose up
```
#### 2. Run this project on your local pc:
- First, create a database then set its name and other values that are needed in your `.env` file (for other values you can see in `.env.example`).
- Next, before you can run the project you have to install the modules first:
```sh
npm install
```
- Now run the project:
```sh
npm run dev
```
- To see if it works properly hit http://localhost:3000/api/todo

## API Documetation
- [https://documenter.getpostman.com/view/33182870/2sA2xmTVZL](https://documenter.getpostman.com/view/33182870/2sA35BaP4f)

## Refereces
- [NodeJS](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) - Node.js is an open-source and cross-platform JavaScript runtime environment.
- [Express](https://expressjs.com/en/5x/api.html) - Express is a minimal and flexible Node.js web application framework.
- [PostgreSQL](https://www.postgresql.org/) - PostgreSQL is a powerful, open source object-relational database system.
- [NPM](https://docs.npmjs.com/about-npm) - npm is the world's largest software registry used to manage private development.
- [VisualStudioCode]() - Visual Studio Code is a lightweight but powerful source code editor which available for Windows, macOS and Linux.
- [Sequelize]() - Sequelize is an easy-to-use and promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, etc.
- [Jest]() - Jest is delightful javascript testing.
