
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
      <input
        type="file"
        onChange={(e) => {
          setVideoUpload(e.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Video</button>
      {videoUrls.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
}

export default Upload;