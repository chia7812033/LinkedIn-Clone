import React from 'react'
import './Login.css'

function Login() {

  const register = () => {
    
  }

  return (
    <div className='login'>
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
        alt=""
      />
      <form>
        <input placeholder="Full name" type="text" />

        <input placeholder="Profile picture (optional)" type="text" />

        <input placeholder="Email" type="text" />

        <input placeholder="Password" type="password" />

        <button>Sign in</button>
      </form>

      <p>Not a member?
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
