import './Login.css'
import Nav from '../components/Nav'

import { useState,useRef } from 'react'
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { LOGIN } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase'




const Login = () => {
const dispatch=useDispatch()
const navigate = useNavigate()
  const emailRef=useRef(null)
  const passwordRef=useRef(null)
 
  const [signIn,setSignIn]=useState(false)
  const [err,setErr]=useState('')



const logIn =(e)=> {
e.preventDefault()
if(!emailRef.current.value && !passwordRef.current.value)
setErr('Enter valid informations')
else{

signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value).then((userCredential)=>{
  dispatch(LOGIN({uid:userCredential.user.uid,
  email:userCredential.user.email}))
  navigate('/')



emailRef.current.value='';
passwordRef.current.value=''}).catch((error)=>{
 setErr(error.message)
  emailRef.current.value='';
passwordRef.current.value=''
})
}}


const register =(e)=> {
 
 e.preventDefault();

 if(!emailRef.current.value && !passwordRef.current.value)
setErr('Enter valid informations')
else {


 
 createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value).then((userCredential)=>{
  dispatch(LOGIN({uid:userCredential.user.uid,
    email:userCredential.user.email}))
    navigate('/')
  emailRef.current.value=''
 passwordRef.current.value=''
 }).catch((error)=>{
  setErr(error.message)
   emailRef.current.value=''
 passwordRef.current.value=''
 })


}}



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
            <input type="email" placeholder='E-MAIL' ref ={emailRef} required onChange={()=>setErr('')}/>
            <input type="password" placeholder='PASSWORD' ref={passwordRef} required onChange={()=>setErr('')}/>
          <button onClick={logIn}>Sign In</button>
          </form>

          <p>New to Netflix? <span onClick={register}>Sign up now.</span></p>

          {err && <p className='err'>{err}</p>}
          </div>}  
        <div className='login__overlay' />

    </div>
  )
}

export default Login