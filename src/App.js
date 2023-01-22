import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route ,Navigate} from "react-router-dom";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Info from './pages/Info'





function App() {

const user =useSelector(state=>state.user.user)
 
useEffect(()=>{
  localStorage.setItem('user',JSON.stringify(user))
  console.log(user)
},[user])



  const Required =({children})=>{
    return user? children : <Navigate to='/login' />
    }
  return (


   
    <div className="app">    
      <Routes>
  <Route path="/" element={<Required ><Home /></Required>} />
  <Route path="/profile" element={<Required><Profile /></Required>} />
  <Route path='/:id' element={<Required><Info /></Required>} />
  <Route path="/login" element={<Login />} />
  
  </Routes>
    </div>
  );
}

export default App;
