import React, { useEffect, useState } from 'react'


const useScrolled = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const isScrolled = () => {
            if(window.scrollY > 0) 
                setIsScrolled(true);
            if(window.scrollY === 0) 
                setIsScrolled(false);
        }
        window.addEventListener("scroll", isScrolled)
        return () =>{
            window.removeEventListener("scroll", isScrolled)
        }
    }, [])
    return isScrolled;
}

export default useScrolled