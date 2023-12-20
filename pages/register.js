import React, { useState } from "react";
import axios from "axios";

export default function Register() {

    const [ registerUsername,setRegisterUsername ] = useState('');
    const [ registerPassword,setRegisterPassword ] = useState('');
    const [ registerEmail,setRegisterEmail ] = useState('');

    const register = () => {
        axios({
          method: 'post',
          data: {
            username: registerUsername,
            password: registerPassword
          },
          withCredentials: true,
          url: 'http://localhost:3001/register'
        }).then(res => {console.log(res)}).catch(err => {console.log(err)})
      }
    return (
        <div>
            {console.log(registerUsername)}
            <h1>register</h1>
            <input type="text" name="username" placeholder="nome do usuário" onChange={e => setRegisterUsername(e.target.value)}/>
            <input type="password" name="password" placeholder="senha do usuário" onChange={e => setRegisterPassword(e.target.value)}/>
            {/* <input type="text" name="email" placeholder="email do usuário" onChange={e => setRegisterEmail(e.target.value)}/> */}
            <button onClick={register}>register</button>
        </div>
    )
}