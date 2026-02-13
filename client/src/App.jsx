import { useState } from "react"
// import { Link } from 'react-router-dom'
import axios from 'axios'

function App() {

  const [data, setData] = useState('')
  const [obj, setObj] = useState({})

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  const sendToServer = () => {
    console.log('sendToServer', data)

    // console.log(id, pw)

    // front에서 저장한 데이터를 server로 전송 -> axios 활용
    axios.post('http:/myweb/getData', {
      data: data
    }).then(res => {
      console.log('res', res.data)
      setObj(res.data)
    }) // getData라는 라우터로 데이터 보내줄게
  }

  const sendToServerUser = () => {
    axios.post('http://myweb/getUser', {
      id: id,
      pw: pw
    }).then(res => {
      console.log(res.data)
    })
  }


  return (
    <>
      <h1>
        <p>Client에서 Server로 데이터 전송하기</p>
        <input type='text' onChange={(e) => setData(e.target.value)}></input>
        <button onClick={sendToServer}>전송</button>
        <hr />
        <p>Server에서 Client로 넘어온 데이터</p>
        {obj.status == 200 &&
          <p>{obj.nick}님 환영합니다.</p>
        }
      </h1>
      <hr />
      <h1>회원가입</h1>
      <p>ID <input type='text' onChange={(e) => setId(e.target.value)}></input></p>
      <p>PW <input type='password' onChange={(e) => setPw(e.target.value)}></input></p>
      <button onClick={sendToServerUser}>가입</button>
      {/* <Link to='/signin'>회원가입</Link> */}
    </>
  )
}

export default App
