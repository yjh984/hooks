import {useEffect, useRef} from 'react';

const useFadeIn=(duration=1, delay=0.3)=>{
    // if(typeof duration !== 'number' || typeof delay !== 'number'){
    //     return;
    // }
    const el = useRef();
    useEffect(()=>{
        if(el.current){
            const {current} = el;
            // current.style.transition = `opacity ${duration}s eas-in-out ${delay}s`;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    },[])
    return {ref: el, style: {opacity: 0}};
}

export default useFadeIn;