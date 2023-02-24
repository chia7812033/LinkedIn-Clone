import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Login() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()

    if (!email || !password) {
      return alert("Please provide email and password")
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }))
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  const register = () => {
    if (!name) {
      return alert("Please enter a full name")
    }
    if (!email || !password) {
      return alert("Please provide email and password")
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: photoUrl
            }))
          })
        return alert("You are successfully registerd!")
      }).catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Full name"
          type="text"
        />

        <input
          value={photoUrl}
          onChange={e => setPhotoUrl(e.target.value)}
          placeholder="Profile picture (optional)"
          type="text"
        />

        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />

        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type='submit' onClick={loginToApp}><span>Sign in</span></button>
      </form>

      <p>Not a member?
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
