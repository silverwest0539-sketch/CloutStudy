const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../config/database')

// 메인 페이지
router.get('/', (req, res) => {
    console.log('서버 접근!')
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

// 회원가입 페이지


// 데이터 받아올 부분
router.post('/getData', (req, res) => {
    console.log('getData Router', req.body)

    // nick 데이터를 DB에 넣어보자!
    let sql = "INSERT INTO DATA_TABLE VALUES (?)"

    conn.query(sql, [req.body.data], (err, rows) => {
        console.log('rows', rows)
        if (rows) {
            // 요청에 대한 응답을 프론트로 넘겨주기
            res.json({ status: 200, nick: '박은서' }) // 200 = 성공적인 상태
        } else {
            res.json({ status: 500 }) // 500 = rows가 존재하지 않음
        }
    })


})

router.post('/getUser', (req,res)=>{
    console.log('getUser Router', req.body)

    const {id, pw } = req.body

    let sql = "INSERT INTO USER_TABLE (id, pw) VALUES (?, ?)"

    conn.query(sql, [id, pw], (err,rows) => {
        console.log('rows', rows)
    })

    res.json({status : 200})
})

module.exports = router;