import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import"../src/styles/App.css"
import CrewPage from "./components/CrewPage";
import Footer from "./components/Footer";
import Home from './components/Home';


function App() {
  const [crewList, setCrewList] = useState()
  return (

  <BrowserRouter>
    <Routes>
       <Route index element = {<Home/>} />
      <Route path="theCrew" element = {<CrewPage crewList={crewList} setCrewList={setCrewList}/>} />
    </Routes>
    <div className="footer"><Footer/></div>
  </BrowserRouter>
  
  );
}

export default App;

