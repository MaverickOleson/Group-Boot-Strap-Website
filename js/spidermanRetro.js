var retroCustom = document.createElement('LINK');
retroCustom.rel = "stylesheet";
retroCustom.type = "text/css"
retroCustom.href = "css/SpiderManRetroCustom.css";
//retro stylesheet created with linked css
var title = document.getElementById('title');
//title is set to the element with the id 'title'
var img = document.createElement('IMG');
img.src = './images/SpiderManRetroLogo.png';
img.style.maxHeight = '200px';
img.style.backgroundColor = 'transparent';
img.style.border = 'none';
//img created with stylings and linked image src
var text = document.createElement('H1');
text.innerHTML = 'Spider-Man';
//h1 created with innerHtml
var retroOn = false;
//retroOn value set to false by default
reload();
//reload function activated after variables are loaded
function retro(){
    if(retroOn){
        document.head.removeChild(retroCustom);
        title.firstElementChild.remove();
        title.appendChild(text);
        retroOn = false;
        //if retroOn is true, remove the retro stylesheet from the head, remove the firstElementChild of title, add the text to title, and set retroOn to false
    }
    else{
        document.head.appendChild(retroCustom);
        title.firstElementChild.remove();
        title.appendChild(img);
        retroOn = true;
        //if retroOn is false, add the retro stylesheet to the head, remove the firstElementChild of title, add the img to title, and set retroOn to true
    }
    sessionStorage.setItem('retroOn', retroOn);
    //save retroOn's value in a sessionStorage item of the same name
}
function reload(){
    retroOn = JSON.parse(sessionStorage.getItem('retroOn'));
    //set retroOn's value to the recorded sessionStorage item's value
    if(retroOn){
        document.head.appendChild(retroCustom);
        title.firstElementChild.remove();
        title.appendChild(img);
        //if retroOn is true, add the retro stylesheet to the head, remove the firstElementChild of tile, and add the img to title
    }
}