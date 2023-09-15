// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './Signup.css'
import { useState } from 'react';

function Signup()
{
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[confirmpassword,setconfirmpassword]=useState("");
    return (
      <div>
      <div className='h1'>
      <h1>Sign up</h1>
      </div>
         <form>
            <div className='namey'>
            <label>Name</label>
            <input type='name' placeholder='Enter Your Name' value={name} onChange={(e)=>setname(e.target.value)} required/>
            </div> 
            
            <div className='email'>
            <label>Email</label>
            <input type='email' placeholder='abc@gmail.com' value={email} onChange={(e)=>setemail(e.target.value)} required/>
            </div>

            <div className='password'>
            <label>Password</label>
            <input type='password' placeholder='********' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
            </div>
             
            <div className="passw">
            <label>Confirm Password</label>
            <input type='password' placeholder='********' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
            </div>

            <div className='submit'>
              <button type='button'>Submit</button>
            </div>

         </form>
      </div>
    )
  }



export default Signup