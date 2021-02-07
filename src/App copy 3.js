import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';

const App = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  return (
    <div className='App'>
      <button onClick={()=>setNumber(number+1)}>{number}</button>
      <button onClick={()=>setANumber(aNumber+1)}>{aNumber}</button>
    </div>
  )
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App/>, rootElement);
export default App;
