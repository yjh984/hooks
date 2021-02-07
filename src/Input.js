import React, {useState} from "react";

const useInput = (initValue, validator) =>{
    const [value, setValue] = useState(initValue);
    const onChange = (e) =>{
        const {target: {value}} =e;
        // console.log(value);
        let willUpdate = true;
        if(typeof validator === 'function') {
            willUpdate = validator(value);
        }
        if (willUpdate){setValue(value);}
    }
    return {value, onChange};
}

const Input = () =>{
    const maxLen = (value)=> (value.length <=10) &&  (!value.includes("@"));
    // console.log((value.length <=10) || (!value.includes("@")));
    const name = useInput("Mr.", maxLen);
    return (
        <input placeholder='Put your name..' {...name}/> 
        //...name은 return을 모두 풀어 놓는다.. 즉, value="..." onChange='...'등
    )
}

export default Input;