import { useEffect } from "react"
// import Upload from "./FileUpload"



export default function CrewPage({crewList, setCrewList}){
    // call the api and use setTasklist to fill in state....
    useEffect(() => {
        fetch('http://localhost:4000/crew')
        .then(results => results.json())
        .then(crew => setCrewList(crew))
        .catch(err => console.error(err))
        
    }, [setCrewList])

    if(!crewList){
        return <h2>add crew members here</h2>
      }

      
    return(
       <>
        <ul>
            {crewList.map(crew => (
                <li key={crew.id}>{crew.name}</li>
            ))}
        </ul>
        {/* <Upload/> */}
      
      
        </>
    )
}






