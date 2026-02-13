
// DB와 연결하려면 mysql2 라는 모듈이 필요 
// 1) 설치 : npm i mysql2 
// 2) require
const mysql = require('mysql2')

// 3) DB 정보 기재 
const conn = mysql.createConnection({
    host : 'project-db-campus.smhrd.com',
    user : 'smhrd_teacher_kyb',
    password : 'smhrd', 
    port : 3307,
    database : 'smhrd_teacher_kyb'
})

conn.connect()
module.exports = conn;