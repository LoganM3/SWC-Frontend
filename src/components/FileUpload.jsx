
import { useState, useEffect } from "react";
import {ref,uploadBytes,getDownloadURL,listAll, } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
// const storageref= ref(storage)

export function Upload() {
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

  return (
    <div className="upload">
        <form>
      <input
        type="file"
        onChange={(e) => {
            console.log('hello')
          setVideoUpload(e.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Video</button>
      </form>
      {videoUrls.map((url) => {
        return (
            <>
                  {/* <img src={url} /> */}
                 <video key={url} controls >
              <source src={url} />
            </video>
            </>
      )})}
    </div>
  );
}





export function ImageUpload() {
  const [filebase64,setFileBase64] = useState("")

  function formSubmit(e) {
    e.preventDefault();
    // Submit your form with the filebase64 as 
    // one of your fields
    console.log({filebase64})
    alert("here you'd submit the form using\n the filebase64 like any other field")
  }

  // The Magic all happens here.
  function convertFile(files ) {
    if (files) {
      const fileRef = files[0] || ""
      const fileType = fileRef.type || ""
      console.log("This file upload is of type:",fileType)
      const reader = new FileReader()
      reader.readAsBinaryString(fileRef)
      reader.onload=(ev) => {
        // convert it to base64
        setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
      }
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        Choose an image to to upload
        <form onSubmit={formSubmit}>
          <input type="file" onChange={(e)=> convertFile(e.target.files)} />
          <hr />
          { filebase64 &&
            <>
            {/* <p>
              It's ready to be submitted!<br />
              Simply include the 'filebase64' variable<br /> 
              as one of the things you submit</p>
             */}
            {/* if its an image */}
            {(filebase64.indexOf("image/") > -1) && 
            <img src={filebase64} width={300} />
            }
         
          
            {/* if it's a video */}
            {(filebase64.indexOf("video/") > -1)  && 
            <video controls >
              <source src={filebase64} />
            </video>
            }
         
 
                           
            <hr />
            {/* <button> Submit and check the console</button> */}
            
            </>
          }
        </form>
      </header>
    </div>
  );
}

