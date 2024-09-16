import React from "react";
import quote from '../assets/quote.png';

const FeedbackCard = ({ content, name, title, img}) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-20 sm:mr-5 mr-0 my-5 feedback-card">
        <img className="w-[30px] h-[30px] object-contain" alt="quote" src={quote} />
        <p className="font-poppins font-normal text-[18px] leading-[32px] my-10">
            {content}
        </p>

        <div className="flex flex-row">
            <img className="w-[60px] h-[60px] rounded-full" src={img} alt={name} />
            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">{name}</h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px]">{title}</p>
            </div>
        </div>
    </div>
)

export default FeedbackCard