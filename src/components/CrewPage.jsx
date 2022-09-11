import { useEffect,useState} from "react"
import { AddForm } from "./AddForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import "../styles/CrewPage.css"



export default function CrewPage({crewList, setCrewList,token,isAdmin, setIsAdmin, setToken}){
    
    // call the api and use setTasklifirst to fill in state....
    useEffect(() => {
         fetch('https://swc-api-aa731.web.app/crew')
        //fetch("http://localhost:5050/crew")
        .then(results => results.json())
        .then(crew => setCrewList(crew))
        .catch(err => console.error(err))
        
    }, [setCrewList])

    if(!crewList){
        return <h2>Loading...</h2>
      }

      
    return(
       <div className="crewBody">
        <div><img className="groupImg" src="swccc.jpeg" /></div> 
        <h2></h2>
        <ul className="crewContainer">
            {/* <div className="box"> */}
            {crewList.map(crew => (
                <div key={crew.id} className="crewCards">
                         {crew.profilePic && <img className="profilePic"  src={crew.profilePic} width={300} />}
                        <div className="text-area">
                         <div className="Name">
                         {crew.name}
                         </div>
                          <a href={crew.Instagram} >
                          <FontAwesomeIcon icon={faInstagram} size="2x"/>
                          </a>
                         <div className="description">
                         {crew.description}
                         </div>
                        </div>
                </div>
            ))}
            {/* </div> */}
        </ul>
       
        <AddForm setCrewList={setCrewList} token={token}/>
       
      
        </div>
    )
}






