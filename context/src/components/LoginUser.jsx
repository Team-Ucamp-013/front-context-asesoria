import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginUser = () => {

 const [loginForm, setLoginForm] = useState()
  const url = 'http://localhost:4003/api/v1/auth/login'
  const url2 = 'http://localhost:4003/api/v1/users/me'
  const navigation = useNavigate()

  const handleSubmit = () => {
    console.log(loginForm)
    axios
    .post(url, loginForm)
      .then((res) => {
        console.log('res.data',res.data)
        return (
          axios
          .get(url2, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${res.data.token}`
            }
          }).then((response) => {
            console.log(response.data)
            navigation('/profile')
          })
        )
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginForm({
      ...loginForm,
      [name]: value
    })
    console.log(loginForm)
  }
  return (
    <div>
      Login 
      <form name="login" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder='email' name='email' onChange={handleChange} />
        <input type="text" placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={() => handleSubmit()}>Enviar</button>
      </form>
    </div>
  )
}

export default LoginUser
