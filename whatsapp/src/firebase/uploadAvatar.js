import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";
  import { storage } from "./firebase";
  import { v4 as uuidv4 } from 'uuid';
  
  const Upload = async (file) => {
    const uniqueId = uuidv4();
    const storageRef = ref(storage, `images/${uniqueId}-${file.name}`);
  
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.error("Upload error:", error);
          alert("Can't upload avatar");
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
  };
  
  export default Upload;
  