import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route ,Navigate} from "react-router-dom";



function App() {
  const user =null;
  const Required =({children})=>{
  return user? children : <Navigate to='login' />
  }
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
