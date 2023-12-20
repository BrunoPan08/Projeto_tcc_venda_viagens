import React, { useState } from "react"

export default function Login() {

    const [ loginUsername,setLoginUsername ] = useState('');
    const [ loginPassword,setLoginPassword ] = useState('');


    return (
        <div>
            <div>
                {console.log(loginUsername)}
                <h1>Login</h1>
                <input type="text" name="username" placeholder="nome do usuário" onChange={e => setLoginUsername(e.target.value)}/>
                <input type="password" name="password" placeholder="senha do usuário" onChange={e => setLoginPassword(e.target.value)}/>
                <button>login</button>
            </div>
        </div>
    )
}