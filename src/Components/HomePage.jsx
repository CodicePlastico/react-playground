import React, {useState} from 'react'
import axios from 'axios'

const HomePage = () => {

  const [user, setUser] = useState({username: '', password: ''})

  const handleChangeUser = (evt) => {
    setUser({...user, [evt.target.name]: evt.target.value})
  }


  const submit = () => {

    if (user.password.length < 8) {
      alert('password troppo corta')
      return
    }

    console.log('submit', user)
    // get username e pwd
    // post verso API
  }

  return (
    <div>
      <input type="text" name="username" defaultValue={user.username} onChange={handleChangeUser} />
      <input type="text" name="password" defaultValue={user.password} onChange={handleChangeUser} />


      <button onClick={submit}>Login</button>


    </div>
    )
}

export default HomePage