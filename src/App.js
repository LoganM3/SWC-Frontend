import { useState } from "react";
import"../src/styles/App.css"
import CrewPage from "./components/CrewPage";
import Footer from "./components/Footer";
import Home from './components/Home';


function App() {
  const [crewList, setCrewList] = useState()
  return (
  <>

    {/* <Home/> */}
    <CrewPage crewList={crewList} setCrewList={setCrewList}/>
    <div className="footer"><Footer/></div>
  </>
  
  );
}

export default App;

