import React from "react";
import Hero from '../assets/Hero.jpeg';

function About(){
    return(
        <div id="about" className="px-[1rem] md:px-[3rem] flex justify-center items-center py-[5rem] bg-secondary">
            <div className="flex flex-col justify-center items-center">
                    <p className="text-[2rem] sm:text-[3rem] font-bold font-cormorant text-gradient">
                        About us
                    </p>
                <p className="max-w-[900px] my-[10px] text-[1rem] sm:text-[1.2rem]"> As a manufacturer of these items, 
                    I'm proud to be part of a thriving industry that produces these 
                    beautiful items. My business, based in India, specializes in the manufacturing 
                    of jewellery and mesh beads for customers around the world. We use the finest quality 
                    materials and the most advanced techniques to create the highest quality items. 
                    Our products are made with precision and attention to detail to ensure that our customers 
                    get the best possible results.
                </p>
            </div>
        </div>
    )
}

export default About;