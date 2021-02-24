var retroCustom = document.createElement('LINK');
retroCustom.rel = "stylesheet";
retroCustom.type = "text/css"
retroCustom.href = "css/indexRetroCustom.css";
//retro stylesheet created with linked css
var retroOn = false;
//retroOn value set to false by default
reload();
//reload function activated after variables are loaded
function retro(){
    if(retroOn){
        document.head.removeChild(retroCustom);
        retroOn = false;
        //if retroOn is true, remove the retro stylesheet from the head and set retroOn to false
    }
    else{
        document.head.appendChild(retroCustom);
        retroOn = true;
        //if retroOn is false, add the retro stylesheet to the head and set retroOn to true
    }
    sessionStorage.setItem('retroOn', retroOn);
    //save retroOn's value in a sessionStorage item of the same name
}
function reload(){
    retroOn = JSON.parse(sessionStorage.getItem('retroOn'));
    //set retroOn's value to the recorded sessionStorage item's value
    if(retroOn){
        document.head.appendChild(retroCustom);
        //if retroOn is true, add the retro stylesheet to the head
    }
}