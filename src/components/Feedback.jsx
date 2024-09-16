import React from "react";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => (
    <section id="clients" className={`sm:px-[3rem] px-[1rem] py-[1rem] bg-secondary flex justify-center items-start flex-col relative font-cormorant`}>

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h1 className=" font-[900] xs:text-[4rem] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">What <span className="text-gradient">people</span> are
            <span className="text-gradient"> saying</span> about us</h1>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
)

export default Feedback