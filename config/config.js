require('dotenv').config()

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "localhost",
    dialect: "postgres",
    port: 5432
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_TEST,
    host: "localhost",
    dialect: "postgres",
    port: 5432
  },
  docker: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_NAME,
    host: "localhost",
    dialect: "postgres",
    port: process.env.PGPORT
  },
}

module.exports = config