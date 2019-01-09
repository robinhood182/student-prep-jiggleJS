//https://stackoverflow.com/questions/3968593/how-can-i-set-multiple-css-styles-in-javascript/47136113
function setStyle(objId, propertyObject) {
  let element = document.getElementById(objId);
  for (var property in propertyObject) {
    element.style[property] = propertyObject[property];
  }
}

const grow = () => {
  let boxHeight = document.getElementById('box').style.height.slice(0, -2);
  let boxWidth = document.getElementById('box').style.width.slice(0, -2);

  setStyle('box', { 'height':`${boxHeight * 1.1}px`, 'width':`${boxWidth * 1.1}px`, 'transition': 'height 1s ease-in-out, width 1s ease-in-out' });
}

const changeColor = () => setStyle('box', {'background-color':'steelblue'});

document.getElementById('box').style.opacity = 1;

const alanWalker = () => {
  let boxOpacity = document.getElementById('box').style.opacity;
  if(boxOpacity <= 0) {
    boxOpacity = 1.5;
  }

  setStyle('box', { 'opacity': boxOpacity - 0.5, 'transition': 'opacity 1s ease-in-out' });
}

const reset = () => {
  setStyle('box', { 'height': '150px', 'width': '150px', 'opacity': 1, 'background-color': 'orange' })
}

document.getElementById('button1').onclick = grow;
document.getElementById('button2').onclick = changeColor;
document.getElementById('button3').onclick = alanWalker;
document.getElementById('button4').onclick = reset;

