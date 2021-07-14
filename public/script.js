let modeBtn=document.getElementById('colorMode');
let colorMode='Dark';

function changeColor() {
  let body=document.getElementById('body');
  let btn=document.getElementById('colorMode');
  if(colorMode=='Dark'){
    body.style.setProperty('--main-color','rgb(255,255,255)');
    body.style.setProperty('--sec-color','rgb(245,245,245)');
    body.style.setProperty('--font-color','black');
    body.style.setProperty('--box-shadow','rgb(200,200,200)');
    btn.innerHTML='<img src="https://img.icons8.com/officel/16/000000/sun.png"/> Light Mode';

    colorMode="Light"
  }
  else{
    body.style.setProperty('--main-color','rgb(46,55,66)');
    body.style.setProperty('--sec-color','rgb(35,44,54)');
    body.style.setProperty('--font-color','white');
    body.style.setProperty('--box-shadow','#0000006e');
    colorMode="Dark";
    btn.innerHTML='<img src="https://img.icons8.com/color/96/ffffff/moon-satellite.png"/> Dark Mode';
  }
}

modeBtn.addEventListener('click', changeColor);
