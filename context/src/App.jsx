import React, { useContext} from 'react'
import axios from 'axios'
import { UserContext } from './context/UserContext'

const App = () => {

const {userData, setData} = useContext(UserContext)

  const saveUser = async() =>{
    const url = 'http://localhost:4003/api/v1/register'
    const result = await axios.post(url, userData)
    console.log(result)
  }
  
  const handleChange = (e) =>{
  const { name, value } = e.target
  setData({
    ...userData,
    [name]: value
  })
  console.log(setData)
  }

 console.log(handleChange)
  return (
    <div>
      <form>
      <input type='text' placeholder='Nombre' name='name' onChange={handleChange} />
      <input type='text'  placeholder='Apellido' name='lastname' onChange={handleChange} />
      <input type='text' placeholder='Username' name='username' onChange={handleChange} />
      <input type='text' placeholder='email' name='email' onChange={handleChange} />
      <input type='text'  placeholder='password' name='password'onChange={handleChange} />
      <button onClick={() => saveUser()}>Enviar</button>
      </form>
    
    </div>
  )
}

export default App
