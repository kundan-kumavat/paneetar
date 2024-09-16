import React from "react";
import { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import CarouselApp from "./Carousel";

function Bangles() {


    return(
        <div id="bangles" className="flex flex-col py-[2rem] justify-center sm:px-[3rem] px-[1rem]">
            <p className="text-[2rem] font-cormorant font-bold">Paneetar Bangles</p>
            
            <CarouselApp path="Paneetar Bangles" />
        </div>
    )
}

export default Bangles;