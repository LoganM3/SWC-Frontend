import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import"../src/styles/App.css"
import CrewPage from "./components/CrewPage";
import Footer from "./components/Footer";
import Home from './components/Home';
import NavBar from "./components/NavBar";
import VideoPage from "./components/VideoPage";


function App() {
  const [crewList, setCrewList] = useState()
  

  return (

  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route index element = {<Home/>} />
      <Route path="crew" element = {<CrewPage crewList={crewList} setCrewList={setCrewList}/>} />
      <Route path="Videos" element = {<VideoPage />} />
    </Routes>
    <div className="footer"><Footer/></div>
  </BrowserRouter>
  
  );
}

export default App;



