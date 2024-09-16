import react, {useState, useEffect} from "react";
import {AiOutlineArrowUp} from 'react-icons/ai';

function GoToTop() {

    const [isVisible, setIsVisible] = useState(false);

    const scroll = () => {
        let minHeight = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

            if(windowScroll > minHeight) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
    }

    useEffect(() => {
        window.addEventListener('scroll', scroll)
        return () => window.removeEventListener("scroll", scroll);
    }, []);


    return(
            <button
            className={`${isVisible ? 'flex' : 'hidden'} fixed bottom-[1.5rem] right-[5%] z-[20] bg-button text-[#fff] font-[600] p-[1rem] w-[3rem] h-[3rem] rounded-full flex items-center justify-center`}
            onClick={() => {
                window.scrollTo({top: '0', left: '0', behavior: 'smooth'});
            }}>
                <AiOutlineArrowUp />
            </button>
    )
}

export default GoToTop;