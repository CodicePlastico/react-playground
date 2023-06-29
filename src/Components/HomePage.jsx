import React, {useState, useRef} from 'react'
import axios from 'axios'

const HomePage = () => {

  const [user, setUser] = useState({username: '', password: ''})
  const myUsername = useRef('')
  const myPassword = useRef('')


  const submit = () => {
    const username = myUsername.current.value
    const password = myPassword.current.value
  }

  return (
    <div>
      <input type="text" name="username" defaultValue={user.username} ref={myUsername}/>
      <input type="text" name="password" defaultValue={user.password} ref={myPassword}/>

      <button onClick={submit}>Login</button>
    </div>
    )
}

export default HomePage