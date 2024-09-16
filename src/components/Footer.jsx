import React from "react";
import { footerLinks, socialMedia } from "../constants";
import logo from '../assets/Group 19.svg';

const Footer = () => (
    <section className={`flex justify-center items-center md:mx-[3rem] mx-[1rem] mt-[2rem] py-8 flex-col border-t-[1px] border-t-black`}>
        <div className={`flex justify-center items-start md:flex-row flex-col mb-10 w-full`}>
            <div className="flex-1 flex-col justify-start mr-10">
                <p className="text-[2rem] font-[900]"><span className="font-aclonica text-gradient">Paneetar</span> by <br />Art Gold India Craft</p>
                <p className={`font-normal text-[1.2rem] leading-[30.8px] mt-3 max-w-[310px]`}>Crafting Bangles and Mesh Beads over 100 years</p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerLink, index) => (
                    <div key={index} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="text-[1.3rem] font-bold leading-[27px]">
                            {footerLink.title}
                        </h4>
                        <ul className="list-none mt-5">
                            {footerLink.links.map((link, index) => (
                                <a
                                key={index}
                                 href={`#${link.link}`}>
                                <li 
                                  className={`font-normal text-[18px] leading-[24px] hover:text-button cursor-pointer
                                  ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                                >
                                    {link.name}
                                </li>
                                </a>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
            <p className="font-normal text-center text-[18px] leading-[27px]">
                2023 Paneetar. All Rights Reserved.
            </p>

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img 
                    className={`w-[20px] h-[21px] object-contain cursor-pointer
                    ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
                     key={social.id}
                     src={social.icon}
                     alt={social.id}
                    />
                ))}
            </div>
        </div>
    </section>
)

export default Footer