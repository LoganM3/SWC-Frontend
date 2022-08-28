
import { useEffect } from "react"

export default function CrewPage({crewList, setCrewList}){
    // call the api and use setTasklist to fill in state....
    useEffect(() => {
        fetch('https://sunday-wake-crew.web.app/crew')
        .then(results => results.json())
        .then(crew => setCrewList(crew))
        .catch(err => console.error(err))
        
    }, [setCrewList])

    if(!crewList){
        return <h2>add crewmembers here</h2>
      }
    return(
        <ul>
            {crewList.map(crew => (
                <li key={crew.id}>{crew.name}</li>
            ))}
        </ul>
    )
}






