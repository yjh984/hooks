const usePreventLeave = () =>{
    const listner = (event) => {
        event.preventDefault();
        event.returnValue='';
    };
    const enableEvent=()=>{
        window.addEventListener('beforeunload',listner);
    };
    const disableEvent=()=>{
        window.removeEventListener('beforeunload',listner);
    };
    return {enableEvent, disableEvent};
}

export default usePreventLeave;