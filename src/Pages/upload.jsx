import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function Upload() {

  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate('/');
    }
  }, []);

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
 
  const uploadFile = () => {
    if (imageUpload == null) return;
    setIsLoading(true);
    const imageRef = ref(storage, `${type}/${name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      setIsLoading(false);
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
      alert("Uploaded Successfully")
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      {
        isLoading ? 
        <Loader /> : 
        <></>
      }
      <div className="relative w-[380px] h-[450px] rounded-md overflow-hidden bg-red">
        <div className="absolute px-[40px] py-[50px] z-2 flex flex-col">
         <h2 className="font-bold text-[1.5rem] text-center leading-[0.1rem]">Upload Photo</h2>
         <div className="inputBox">
           <input
           type="file"
           onChange={(event) => {
           setImageUpload(event.target.files[0]);
           }}
           />
         </div>
         <div className="inputBox">
           <input type="text" 
            onChange={(e) => {
            setName(e.target.value);
            }}
           name="" id="Name" placeholder="Name" />
           <span>Name</span>
           <i></i>
         </div>
         <div className="inputBox">
          <select onChange={(e) => {
           setType(e.target.value);
          }} name="" id="">
          <option value="">select</option>
          <option value="Paneetar Bangles">Bangles</option>
          <option value="Paneetar Mesh Beads">Mesh Beads</option>
          </select>
         </div>
      
         <button className="btn w-[200px]" 
          onClick={uploadFile}
         > Upload Image</button>
        </div>
      </div>
    </div>
  );
}

export default Upload;