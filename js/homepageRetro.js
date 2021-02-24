var retroCustom = document.createElement('LINK');
retroCustom.rel = "stylesheet";
retroCustom.type = "text/css"
retroCustom.href = "css/indexRetroCustom.css";
var retroOn = false;
reload();
function retro(){
    if(retroOn){
        document.head.removeChild(retroCustom);
        retroOn = false;
    }
    else{
        document.head.appendChild(retroCustom);
        retroOn = true;
    }
    sessionStorage.setItem('retroOn', retroOn);
}
function reload(){
    retroOn = JSON.parse(sessionStorage.getItem('retroOn'));
    if(retroOn){
        document.head.appendChild(retroCustom);
    }
}