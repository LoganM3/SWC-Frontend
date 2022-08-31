import { useState, useEffect } from "react"


export default function AddCrew(){
    const [image,setImage] = useState("")
    const [name, setName] = useState("")
    const [description, setDesciption] = useState("")
    
    
    
    const addCrew = await fetch("https://swc-api-aa731.web.app/crew", {
        method: "POST",
        headers: {"content-type": "application /json"},
        body: JSON.stringify({ })

    })
    .catch(err => console.error(err))
    return(
        <>
        </>
    )
}