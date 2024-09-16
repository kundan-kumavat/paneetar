import React from "react";
import { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import CarouselApp from "./Carousel";

function MeshBeads() {

    return(
        <div id="meshBeads" className="flex flex-col py-[2rem] justify-center sm:px-[3rem] px-[1rem] font-cormorant">
            <p className="text-[2rem] font-bold">Paneetar Mesh Beads</p>
            <CarouselApp path="Paneetar Mesh Beads" />
        </div>
    )
}

export default MeshBeads;