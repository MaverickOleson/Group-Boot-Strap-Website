var retroCustom = document.createElement('LINK');
retroCustom.rel = "stylesheet";
retroCustom.type = "text/css"
retroCustom.href = "css/SpiderManRetroCustom.css";
var title = document.getElementById('title');
var img = document.createElement('IMG');
img.src = './images/SpiderManRetroLogo.png';
img.style.maxHeight = '200px';
img.style.backgroundColor = 'transparent';
img.style.border = 'none';
var text = document.createElement('H1');
text.innerHTML = 'Spider-Man';
var retroOn = false;
reload();
function retro(){
    if(retroOn){
        document.head.removeChild(retroCustom);
        title.firstElementChild.remove();
        title.appendChild(text);
        retroOn = false;
    }
    else{
        document.head.appendChild(retroCustom);
        title.firstElementChild.remove();
        title.appendChild(img);
        retroOn = true;
    }
    sessionStorage.setItem('retroOn', retroOn);
}
function reload(){
    retroOn = JSON.parse(sessionStorage.getItem('retroOn'));
    if(retroOn){
        document.head.appendChild(retroCustom);
        title.firstElementChild.remove();
        title.appendChild(img);
    }
}