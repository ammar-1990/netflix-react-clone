import './Login.css'
import Nav from '../components/Nav'
import db from '../firebase.js'
import { useState,useRef } from 'react'


const Login = () => {

  const emailRef=useRef(null)
  const passwordRef=useRef(null)

  const [signIn,setSignIn]=useState(false)
const logIn =(e)=> {
e.preventDefault()
}


const register =(e)=> {
 e.preventDefault()

//  auth.createUserWithEmailAndPassword()
}



  return (
    <div className='login'>
        <Nav login={true} setSignIn={setSignIn}/>

      {!signIn ? <div className="login__content">
          <h1>Unlimited films,TV programmes and more.</h1>
          <p>Watch,anywhere.Cancel at any time.</p>
          <p>Ready to watch? Enter your email to create or restart your membership </p>

          <form >
            <input type="email" placeholder='E-MAIL ADDRESS' />
            <button onClick={(e)=>{e.preventDefault();setSignIn(true)}}>GET STARTED</button>
          </form>
        </div> : <div className='signIn'>
          <h1>sign In</h1>
          <form className="signIn__inputs">
            <input type="text" placeholder='E-MAIL'/>
            <input type="password" placeholder='PASSWORD'/>
          <button onClick={logIn}>Sign In</button>
          </form>

          <p>New to Netflix? <span onClick={register}>Sign up now.</span></p>
          </div>}  
        <div className='login__overlay' />

    </div>
  )
}

export default Login