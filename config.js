require('dotenv').config();

const config = {
  "dbdriver": "mysql",
  "dbhost": process.env.MYSQL_HOST,
  "db": process.env.MYSQL_DB,
  "dbusername": process.env.MYSQL_USER,
  "dbpassword": process.env.MYSQL_PASSWORD,  
  "dbport": process.env.MYSQL_PORT
}

module.exports = config;  