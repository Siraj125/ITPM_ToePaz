import React, { useState } from 'react'

export  default function Login () {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');

    async function UserLogin(event){
        event.preventDefault();
        
    }

  return (
    <div>
        login
        <form onSubmit={UserLogin}>
           
                <input 
                    onChange={(e)=>setusername(e.target.value)}
                    type='email' 
                    required='true'
                    value={username}
                    placeholder="username"/>
                    <br/>
                <input
                    type='password'
                    required='true' 
                    value={password} 
                    placeholder='password'
                    onChange={(e)=>setpassword(e.target.value)}/>
            
        </form>
        <span></span>
    </div>
  )
}
