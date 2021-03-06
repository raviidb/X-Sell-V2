function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener){
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}
bindEvent(window, 'message', function (e) {
    // results.innerHTML = e.data;
    if(e.data=='cancel'){
       var handleEvent = document.querySelector("#kyc");
       handleEvent.addEventListener("click",document.getElementById('cancelModal').click(),false)
    }
    if(e.data=='cancel1'){
       var handleEvent = document.querySelector("#account");
       handleEvent.addEventListener("click",document.getElementById('cancelModalAccount').click(),false)
    }
    else if(e.data=='kycSuccess'){
       localStorage.setItem('kycSuccess','success');
    }
    else{
       localStorage.removeItem('FI_Details');
       let sampleData = [];
       sampleData.push(e.data)
       if(e.data !== 'cancel'){
          localStorage.setItem('FI_Details',JSON.stringify(sampleData));
       }
    }
});
