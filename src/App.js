import React, {useState, useEffect, useRef} from "react";
import ReactDOM from 'react-dom';
import Counter from "./Counter";
import Input from "./Input";
import useHover from "./useHover";
import useConfirm from "./useConfirm";
import usePreventLeave from "./usePreventLeave";
import useBeforeLeave from "./useBeforeLeave";
import useFadeIn from "./useFadeIn";
import useNetwork from "./useNetwork";
import useScroll from "./useScroll";
import useFullScreen from "./useFullScreen";
import useNotification from "./useNotification";
import useAxios from "./useAxios";

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
];

const useTabs = (initTab, allTab)=>{
  const [curIndex, setCurIndex] = useState(initTab);
    // if(!allTab || !Array.isArray(allTab)){
  // return;
  // }
  return {
    curItem: allTab[curIndex],
    changeItem: setCurIndex
  }
};

const useNumber = () =>{
  const [number, setNumber] = useState(0);  
  const sayHello = () => console.log("Hi...");
  useEffect(sayHello,[number]);
  return{
    number: number,
    setNumber: setNumber
  }
};

const useTitle = (initTitle) =>{
  const [title, setTitle] = useState(initTitle);
  const updateTitle = ()=>{
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle,[title]);
  return setTitle;
};

const useClick = onFunction =>{
  const element = useRef();
  useEffect(()=>{
    // const element = ref.current;
    console.log("useClick did-Mounted");
    if(element.current) {
      element.current.addEventListener('click',onFunction);
    }
    return ()=> {
      console.log("useClick will-Mounted");
      if(element.current) {
        element.current.removeEventListener('click',onFunction);
      }
    }
  }, []);

  // if (typeof onFunction !== 'function'){
  //   console.log('nonfunction!');
  //   return;
  // };
  return element;
};

const App = () => {
  const {loading, data, error, refetch} = useAxios({url:'https://yts.mx/api/v2/list_movies.json'});
  // console.log(loading, data, error);

  const triggerNoti = useNotification('Can I do?',{body:'I love it..'});

  const onFulls =(isFull)=>{
    console.log(isFull? "Fullscreen":"small screen");
  }
  const {element, triggerFull, exitFull}=useFullScreen(onFulls);

  const {y} = useScroll();
  const handleNetworkChange=(onLine)=>{
    console.log(onLine? "just Online":"Offline");
  }
  const statusLine = useNetwork(handleNetworkChange);

  const fadeIn1 = useFadeIn();
  const fadeIn2 = useFadeIn(5,0.6);

  const begging =()=> console.log("please, don't leave me");
  useBeforeLeave(begging);

  const {enableEvent, disableEvent} = usePreventLeave();

  const deleteItem = () => console.log("delete items...");
  const abortItem = () => console.log("aborted");
  const deleteConfirm = useConfirm("Are you sure?",deleteItem, abortItem);
  
  const sayUseHover =()=> console.log("entered the useHover");
  const title2 = useHover(sayUseHover);

  const sayUseClick = ()=> console.log("clicked the useClick");
  const title = useClick(sayUseClick);

  const input = useRef();
  // setTimeout(()=>console.log(input),1000);
  if(input.current !== undefined) {
    setTimeout(()=>input.current.focus(), 1000);
  }

  const {curItem, changeItem} = useTabs(0, content);
  const {number, setNumber} = useNumber();
  const titleUpdater = useTitle("loading...");
  setTimeout(()=>titleUpdater("Home"), 2000);

  return (
    <div className='App' style={{height:'200vh'}}>
      <button onClick={triggerNoti}>Noti.</button>
      <h2 style={{position:'fixed', color: y>200 ? "red":"blue"}}>Scroll</h2>
      <div>{statusLine? "Online":"Offline"}</div>
      <h4 {...fadeIn1}>Tab-example...</h4>
      {content.map((item, index)=>(
        <button key={index} onClick={()=>changeItem(index)}>{item.tab}</button>
      ))}
      <div>{curItem.content}</div>
      <br/>
      <h4 {...fadeIn2}>Counter-example...</h4>
      <Counter/>
      <br/>
      <button onClick={()=>setNumber(number+1)}>{number}</button>
      <br/><br/>
      {/* <h3>{console.log(data&&data.data.data.movie_count)}{error}</h3> */}
      <h3>{loading? "Loading":data&&data.data.data.movie_count}{error}</h3>
      <button onClick={refetch}>Refeching...</button>
      <br/><br/>
      <h4>Input-example</h4>
      <Input/>
      <br/>
      <input ref={input} placeholder='la'/>
      <h5 ref={title}>Hi~ useClick</h5>
      <h5 ref={title2}>Hi~ useHover</h5>
      <button onClick={deleteConfirm}>delete Confirm</button>
      <button onClick={enableEvent}>Protected leave</button>
      <button onClick={disableEvent}>Unprotected leave</button>
      <br/><br/>
      <div ref={element}>
        <img alt='profile' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4aWCaljwNKZoA0rgdP8wiMN8Bgq_ZC43ew&usqp=CAU'></img>
        <button onClick={exitFull}>Exit Full</button>
      </div>
      <button onClick={triggerFull}>Fullscreen</button>
    </div>
  )
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
export default App;