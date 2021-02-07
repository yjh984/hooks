import {useEffect} from 'react';

const useBeforeLeave=(onFunc)=>{
    // if(typeof onFunc !=='function'){
    //     return;
    // };
    const onHandle=(event)=>{
        const {clientY} = event;
        if(clientY <= 0){
            onFunc();
        }
    };
    useEffect(()=>{
        document.addEventListener('mouseleave',onHandle);
        return ()=> document.removeEventListener('mouseleave',onHandle);
    }, []);
}

export default useBeforeLeave;