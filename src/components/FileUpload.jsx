
import { useState, useEffect } from "react";
import {ref,uploadBytes,getDownloadURL,listAll, } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
// const storageref= ref(storage)

function Upload() {
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
                 {/* <img src={url} />); */}
                 <video controls >
              <source src={url} />
            </video>
            </>
      )})}
    </div>
  );
}

export default Upload;