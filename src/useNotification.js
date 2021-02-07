const useNotification =(title, option)=>{
    if(!("Notification" in window)){
        // console.log('It is not Windows!');
        return;
    }
    const fireNoti=()=>{
        if(Notification.permission !=='granted'){
            Notification.requestPermission().then(permission=>{
                if(permission==='granted'){
                    new Notification(title, option);
                }else {
                    return;
                }
            });
        }else{
            new Notification(title, option);
        }
    };
    return fireNoti;
}

export default useNotification;