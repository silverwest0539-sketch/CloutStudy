
// DB와 연결하려면 mysql2 라는 모듈이 필요 
// 1) 설치 : npm i mysql2 
// 2) require
const mysql = require('mysql2')

// 3) DB 정보 기재 
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234', 
    port : 3306,
    database : 'NODEJS'
})

conn.connect()
module.exports = conn;