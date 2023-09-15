/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Login() 
    {
    const[emailid,setemailid]=useState("");
    const[password,setpassword]=useState("");
    const[submit,setsubmit]=useState("");
    return (
      <div>
      <div className='h1'>
        <h1>Login</h1>
        </div>
        <form>
             <div className="email">
                <label>Email</label>
                <input type='email' placeholder='abc@gmail.com' value={emailid} onChange={(e)=>setemailid(e.target.value)} required/>
             </div>

             <div className="pass">
                 <label>Password</label>
                 <input type='password' placeholder='********' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
             </div>

             <div className="sub">
      
                 <button type='button'>submit</button>
              </div>

              <div className="signup">
                  <p>Don't have an account?  
                  <Link to='/register'>Register</Link></p>  
              </div>
       </form>
    </div>
    )
    
}

export default Login