import {useEffect, useRef} from "react";

const useHover = onFunc =>{
    // if(typeof onFunc !== 'function'){
    //     return;
    // }
    const element = useRef();
    useEffect(()=>{
      console.log("useHover did-Mounted");
      if(element.current) {
        element.current.addEventListener('mouseenter',onFunc);
      }
      return ()=> {
        console.log("useHover will-Mounted");
        if(element.current) {
          element.current.removeEventListener('mouseenter',onFunc);
        }
      }
    }, []);
  
    // if (typeof onFunction !== 'function'){
    //   console.log('nonfunction!');
    //   return;
    // };
    return element;
  };

  export default useHover;