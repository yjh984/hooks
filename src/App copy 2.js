import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import Counter from "./Counter";
import Input from "./Input";

const content = [
  {
    tab: 'section1',
    content: 'This is a section 1..'
  },
  {
    tab: 'section2',
    content: 'This is a section 2..'
  },
  {
    tab: 'section3',
    content: 'This is a section 3..'
  }
]

const useTabs = (initTab, allTab)=>{
  const [curIndex, setCurIndex] = useState(initTab);
    // if(!allTab || !Array.isArray(allTab)){
  // return;
  // }
  return {
    curItem: allTab[curIndex],
    changeItem: setCurIndex
  }
}

const App = () => {
  const {curItem, changeItem} = useTabs(0, content);
  return (
    <div className='App'>
      <h4>Tab-example...</h4>
      {content.map((item, index)=>(
        <button key={index} onClick={()=>changeItem(index)}>{item.tab}</button>
      ))}
      <div>{curItem.content}</div>
      <br/><br/>
      <h4>Counter-example...</h4>
      <Counter/>
      <br/><br/>
      <h4>Input-example</h4>
      <Input/>
    </div>
  )
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App/>, rootElement);
export default App;
