require("dotenv").config()
require('dotenv').config({ path: `./.env.${process.env.APP_ENV}` }); 
console.log(process.env.PG_DATABASE);
module.exports = {
  "development": {
    "username": process.env.PG_USER,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "host": process.env.PG_HOST,
    "dialect": "postgres",
    "logging": false
  },
  "test": {
    "username": process.env.PG_USER,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "host": process.env.PG_HOST,
    "dialect": "postgres",
    "logging": false
  },
  "production": {
    "username": process.env.PG_USER,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "host": process.env.PG_HOST,
    "dialect": "postgres",
    "logging": false
  }
}
