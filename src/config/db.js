// Require the initial env 
require('dotenv').config();

// Require the actual env file for the app enviroment
require('dotenv').config({ path: `./.env.${process.env.APP_ENV}` }); 

// Require postgres tool
const pgtools = require('pgtools');

const config = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  host: process.env.PG_HOST
}

pgtools.createdb(config, process.env.PG_HOST, function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
  console.log("Database created");

  pgtools.dropdb(config, process.env.PG_HOST, function (err, res) {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log(res);
  });
});

