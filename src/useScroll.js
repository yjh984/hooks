import {useEffect, useState} from 'react';

const useScroll=()=>{
    const [state, setState]=useState({x:0, y:0});
    const handleScroll=()=>{
        // console.log(window.scrollY);
        setState({x:window.scrollX, y:window.scrollY});
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);

    return state;
}

export default useScroll;