import React from "react";

const Button = ({style, name}) => {
    return(
        <button
        type="button"
        className={`button py-[0.7rem] px-[1.5rem] font-cormorant bg-button text-[#fff] text-[1rem] md:text-[1.5rem] rounded-[10px] my-[2.5rem] ${style}`}
        >
            {name}
        </button>
    )
}

export default Button;