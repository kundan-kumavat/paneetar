import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, listAll } from 'firebase/storage';

function CarouselApp({path}) {

    const [imagesUrls, setImageUrls] = useState([]);
    const imagesRef = ref(storage, `${path}/`);

    useEffect(() => {
      try {
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
      } catch (error) {
        console.log(error);
      }
    }, []);

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 400 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 400, min: 0 },
          items: 1
        }
    };

    return(

        <div className="mt-[1rem]">
            <Carousel 
            className="z-[10]" 
            responsive={responsive} 
            showDots={true} 
            keyBoardControl={true} 
            autoPlay={true} 
            autoPlaySpeed={3000} 
            infinite={true}
            >

              {
                imagesUrls.map((url, index) => {
                    return <img 
                    key={index}
                    className="h-[200px] mx-[1rem]" src={url} />;
                })
              }
            </Carousel>
        </div>
    )
}

export default CarouselApp;