const express = require('express')
const app = express()

const indexRouter = require('./routes/index')
const path = require('path')

// cors 오류 해결
const cors = require('cors')
app.use(cors())
app.use(express.json())

// post 방식 데이터를 주고받을 때 필요한 미들웨어
app.use(express.urlencoded({extended : true}))

// npm run build를 통해 React 프로젝트를 하나의 index.html로 만들었음
// -> 그 파일을 켜기 위해 정적인 파일을 담당하는 코드가 필요
app.use(express.static(path.join('../client/dist'))) // 앞으로 내가 사용할 정적인 프론트 파일은 여기에 있음


app.use('/', indexRouter)


app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'),()=>{
    console.log(`${app.get('port')}번 포트에서 대기중...`)
})