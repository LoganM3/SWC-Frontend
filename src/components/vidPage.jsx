import {Upload} from "./FileUpload";
import "../styles/Videos.css"

export default function VidPage({token}){


    return(
        <div className="body">
            <div className="vid-container">
                <Upload token={token}/>
            </div>
        </div>
    )
    }