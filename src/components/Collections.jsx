import React from "react";
import hero from '../assets/Hero.jpeg';

function Collections() {
    return(
        <div id="products" className="flex flex-col justify-content items-center bg-red py-[1rem] font-cormorant">
            <p className="font-[900] text-[2rem] mb-[2rem]">Popular Collections</p>

            <div className="flex sm:flex-row flex-col justify-around">
                <div className="flex flex-col justify-center items-center">
                    <img className="w-[300px] h-[300px] rounded-full" src={hero} alt="" />
                    <p className="text-[1.3rem] m-[0.5rem] font-semibold">Paneetar Bangles</p>
                </div>
                <div className="flex flex-col justify-center items-center ml-[0] sm:ml-[3rem]">
                    <img className="w-[300px] h-[300px] rounded-full" src={hero} alt="" />
                    <p className="text-[1.3rem] m-[0.5rem] font-semibold">Paneetar Mesh Beads</p>
                </div>
            </div>
        </div>
    )
}

export default Collections;