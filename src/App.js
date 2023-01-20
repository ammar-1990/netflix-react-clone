import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route ,Navigate} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";



function App() {

  const user=useSelector(state=>state.user)
  const Required =({children})=>{
  return user? children : <Navigate to='login' />
  }


  useEffect(()=>{
    const auth=getAuth();
    const unsubscribe=onAuthStateChanged(auth,(theUser)=>{
      if(theUser)
      {

        console.log(theUser)
      }
      else
      {

        console.log(theUser)
      }
    })

    return unsubscribe
  },[])
  return (


   
    <div className="app">    
      <Routes>
  <Route path="/" element={<Required ><Home /></Required>} />
  <Route path="login" element={<Login />} />
  </Routes>
    </div>
  );
}

export default App;
