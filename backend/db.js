//개발시 환경설정
//const mysql = require("mysql");
//const pool = mysql.createPool({
//    connectionLimit : 10,
//    host: "mysql",
//    user: 'root',
//    password: 'johnahn',
//    database: 'myapp',
//});
//exports.pool = pool;

// 운영환경(AWS RDS 사용) 시 설정 
const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});
exports.pool = pool;