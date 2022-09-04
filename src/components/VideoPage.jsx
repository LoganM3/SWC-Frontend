import { useEffect,useState} from "react"
import { AddVideo } from "./VideoUpload"
import "../styles/Videos.css"


export default function VideoPage({videoList, setVideoList}){
    
    // call the api and use setTasklifirst to fill in state....
    useEffect(() => {
        fetch('https://swc-api-aa731.web.app/videos')
        .then(results => results.json())
        .then(videos => setVideoList(videos))
        .catch(err => console.error(err))
        
    }, [setVideoList])


    if(!videoList){
        return <h2>add videos here</h2>
      }

      
    return(
       <div >
        <ul className="videoContainer">
            {videoList.map(videos => (
                <div key={videos.id} className="">
                         {videos.url && <video className="#" src={videos.url} width={300} />}
                         
                         
                </div>
            ))}
        </ul>
       
        <AddVideo setVideoList={setVideoList}/>
      
      
        </div>
    )
}


