const config = require('../config');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host     : config.dbhost,
    user     : config.dbusername,
    password : config.dbpassword,
    database : config.db
});

module.exports = conn;