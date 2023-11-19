const mySql = require("mysql2");

const pool = mySql.createPool( {
    host : "localhost",
    user : "root",
    database : "shop",
    password : "Mota0bhai#"
});

module.exports = pool.promise();