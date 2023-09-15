// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './Signup.css'
import { useState } from 'react';

function Signup()
{
  const[name,setname]=useState("");
  const[emailid,setemailid]=useState("");
  const[password,setpassword]=useState("");
    return (
      <div>
      <h1>Sign up</h1>
         <form>
            <div className='name'>
            <label>Name</label>
            <input type='name' placeholder='Enter Your Name' value={name} onChange={(e)=>setname(e.target.value)} required/>
            </div> 
            
            <div className='emailid'>
            <label>Email</label>
            <input type='email' placeholder='Enter Your Email' value={emailid} onChange={(e)=>setemailid(e.target.value)} required/>
            </div>

            <div className='password'>
            <label>Password</label>
            <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
            </div>
             
            <div className='submit'>
              <button type='button'>Submit</button>
            </div>

         </form>
      </div>
    )
  }



export default Signup