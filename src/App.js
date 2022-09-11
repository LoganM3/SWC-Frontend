import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import"../src/styles/App.css"
import CrewPage from "./components/CrewPage";
import Footer from "./components/Footer";
import Home from './components/Home';
import NavBar from "./components/NavBar";
import VidPage from "./components/vidPage";
import Admin from "./components/Admin";
import { useEffect } from "react";



function App() {
    const [crewList, setCrewList] = useState()
    const [token, setToken] = useState()
    const [isAdmin, setIsAdmin] = useState(false)
  

    useEffect(() => {
      if(localStorage.getItem('token')){
        setToken(localStorage.getItem('token'))
      }
    },[setToken])
    



  

  return (

  <BrowserRouter className="body">
    <NavBar/>
    <Routes>
      <Route index element = {<Home/>} />
       <Route path="admin" element = {<Admin setToken={setToken} setIsAdmin={setIsAdmin}/>}/> 
      <Route path="crew" element = {<CrewPage crewList={crewList} setCrewList={setCrewList} token={token}/>} />
      <Route path="videos" element={<VidPage token={token} /> } />
    </Routes>
    <div className="footer"><Footer/></div>
  </BrowserRouter>
  
  );
}

export default App;



