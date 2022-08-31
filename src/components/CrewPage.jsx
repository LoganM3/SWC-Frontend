import { useEffect } from "react"
import { ImageUpload } from "./FileUpload"




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
       <div>
        <ul>
            {crewList.map(crew => (
                <li key={crew.id}>{crew.name}</li>
            ))}
        </ul>
        <ImageUpload/>
      
      
        </div>
    )
}






