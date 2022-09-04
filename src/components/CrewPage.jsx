import { useEffect,useState} from "react"
import { AddForm } from "./AddForm"
import "../styles/CrewPage.css"



export default function CrewPage({crewList, setCrewList}){
    
    // call the api and use setTasklifirst to fill in state....
    useEffect(() => {
        fetch('https://swc-api-aa731.web.app/crew')
        .then(results => results.json())
        .then(crew => setCrewList(crew))
        .catch(err => console.error(err))
        
    }, [setCrewList])

    if(!crewList){
        return <h2>add crew members here</h2>
      }

      
    return(
       <div >
        <div><img className="groupImg" src="group.png" /></div> 
        <h2></h2>
        <ul className="crewContainer">
            {crewList.map(crew => (
                <div key={crew.id} className="crewCards">
                         {crew.profilePic && <img className="profilePic"  src={crew.profilePic} width={300} />}
                         <br/>
                         {crew.name}
                         <br/>
                         {crew.description}
                </div>
            ))}
        </ul>
       
        <AddForm setCrewList={setCrewList}/>
      
      
        </div>
    )
}






