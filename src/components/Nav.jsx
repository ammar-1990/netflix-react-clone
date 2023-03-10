import './Nav.css'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Nav = ({login,setSignIn}) => {
  const navigate=useNavigate()
const [show,setShow]=useState(false)
const handleShow =()=>{
    if(window.scrollY > 100)
    setShow(true)
    else
    setShow(false)
}

useEffect(()=> {
window.addEventListener('scroll',handleShow)

return () =>window.removeEventListener('scroll',handleShow)
},[])



  return (
    <nav className={show ? 'black' : ''}>
        <img onClick={()=>navigate('/')} className='logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        { login ? <button className='login__button' onClick={()=>{setSignIn(true)}}>Sign In</button> :  <img onClick={()=>navigate('/profile')} className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" /> }
    </nav>
  )
}

export default Nav