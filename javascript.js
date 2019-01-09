//from : https://stackoverflow.com/questions/3968593/how-can-i-set-multiple-css-styles-in-javascript/47136113
function setStyle(objId, propertyObject) {
  let element = document.getElementById(objId);
  for (var property in propertyObject) {
    element.style[property] = propertyObject[property];
  }
}

const grow = () => {
  let boxHeight = document.getElementById('box').style.height.slice(0, -2);
  let boxWidth = document.getElementById('box').style.width.slice(0, -2);
  setStyle('box', { 'height':`${boxHeight * 1.2}px`, 'width':`${boxWidth * 1.2}px`, 'transition': 'height .9s ease-in, width 1s ease-out' });
}

const getRandomRgbValues = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const changeColor = () => {
  let r = getRandomRgbValues(0, 255);
  let g = getRandomRgbValues(0, 255);
  let b = getRandomRgbValues(0, 255);
  setStyle('box', {'background-color':`rgb(${r}, ${g}, ${b})`, 'transition': 'background-color 0.75s'});
}

document.getElementById('box').style.opacity = 1;

const alanWalker = () => {
  let boxOpacity = document.getElementById('box').style.opacity;
  if(boxOpacity <= 0) {
    boxOpacity = 1.5;
  }
  setStyle('box', { 'opacity': boxOpacity - 0.5, 'transition': 'opacity .75s ease-in' });
}

const reset = () => setStyle('box', { 'height': '150px', 'width': '150px', 'opacity': 1, 'background-color': 'rgb(255, 165, 0)' });

document.getElementById('button1').onclick = grow;
document.getElementById('button2').onclick = changeColor;
document.getElementById('button3').onclick = alanWalker;
document.getElementById('button4').onclick = reset;
