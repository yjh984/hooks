import {useState} from "react";

const Counter = () =>{
    const [count, setCount] = useState(0);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button>
            <div>Counter : {count}</div>
        </div>
    )
}

export default Counter;