import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import React from "react";



export function Upload({token}) {
  const [videoUpload, setVideoUpload] = useState(null);
  const [videoUrls, setVideoUrls] = useState([]);

  const videoListRef = ref(storage, "videos/");
  const uploadFile = () => {
    if (videoUpload == null) return;
    

    const videoRef = ref(storage, `videos/${videoUpload.name + v4()}`);
    uploadBytes(videoRef, videoUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setVideoUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(videoListRef).then((response) => {    
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
           setVideoUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
function formSubmit(e){
  e.preventDefault();
}


  // console.log({videoUrls})
  return (
    
    <div className="upload">
     
      {videoUrls.map((url) => {
        return (
          <>
            <video className="videos" key={url} controls>
              <source src={url} />
            </video>
          </>
        );
      })}

<form onSubmit={formSubmit}>
        <input
          type="file"
          onChange={(e) => {
            console.log("file selected");
            setVideoUpload(e.target.files[0]);
          }}
          hidden={token? false: true}
        />
        <button onClick={uploadFile} hidden={token? false: true} > Upload Video</button>
      </form>

    </div>
   
  );
}
