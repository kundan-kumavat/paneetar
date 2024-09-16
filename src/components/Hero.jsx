import React from "react";
import hero from '../assets/Group 19.svg';
import Button from "./Button";

function Hero(){

    return(
        <>
        <div className="pt-[2rem] flex flex-col-reverse xs:flex-row xs:justify-between xs:justify-center xs:items-center min-h-[100vh]">
            <div className="flex flex-col md:mx-[3rem] mx-[1rem]">
                <p className="text-[2rem] md:text-[4rem] font-bold  md:leading-[5rem]"><span className="font-aclonica text-gradient">Paneetar</span> by <br />Art Gold India Craft</p>
                <p className="md:text-[1.5rem] text-[1rem] font-normal mt-[1rem]">Crafting Bangles and Mesh Beads for Over 100 Years</p>
                <div>
                <a href="#products"><Button style={``} name={`View Collections`} /></a>
                </div>
            </div>

            <div className="ss:w-[50%] w-[100%] relative hero-img">
                <img className="w-[100%] h-auto z-[10]" src={hero} alt="" />
            </div>
        </div>
        </>
    )
}

export default Hero;