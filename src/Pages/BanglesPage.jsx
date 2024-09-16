import React from "react";
import { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, listAll } from "firebase/storage";

function BanglesPage(){

    const [ imagesUrls, setImageUrls ] = useState([]);
    const imagesRef = ref(storage, 'Paneetar Bangles');

    useEffect(() => {
      const fetchImages = async () => {
        const result = await listAll(imagesRef);
        let urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

        return Promise.all(urlPromises);
      }

      const loadImages = async () => {
        const urls = await fetchImages();
        setImageUrls(urls);
      }

      loadImages();
    }, []);  

    return(
        <div  className="min-h-[100vh] px-[1rem] sm:px-[3rem] flex flex-col mt-[4rem] items-start">
            <p className="font-poppins font-[600] text-[2rem] my-[1rem]">Paneetar Bangles</p>

            <div className="flex flex-row flex-wrap gap-[2rem]">
            {
                imagesUrls.map((url) => {
                    return <img className="w-[200px] h-auto" src={url} />
                })
            }
            </div>
        </div>
    )
}

export default BanglesPage;