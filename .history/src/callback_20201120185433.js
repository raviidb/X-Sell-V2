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
   if(e.data=='cancel2'||e.data=='eMandatesuccess'||e.data=='eMandatefail'){
      if(e.data=='eMandatesuccess'){localStorage.setItem('E-mandate-Status','success')}
      else if(e.data=='eMandatefail'){localStorage.setItem('E-mandate-Status','fail')}
      var handleEvent = document.querySelector("#eMandate");
      handleEvent.addEventListener("click",document.getElementById('cancelModaleMandate').click(),false);
   }
   if(e.data=='cancel3'){
      var handleEvent = document.querySelector("#loanRestr");
      handleEvent.addEventListener("click",document.getElementById('cancelModalLR').click(),false)
   }
   else if(e.data=='kycSuccess'){
      localStorage.setItem('kycSuccess','success');
      var handleEvent = document.querySelector("#kyc");
      handleEvent.addEventListener("click",document.getElementById('cancelModal').click(),false)
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
