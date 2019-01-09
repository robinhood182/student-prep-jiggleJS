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

  setStyle('box', {'height':`${boxHeight * 1.1}px`, 'width':`${boxWidth * 1.1}px`});
}

const paintBlue = () => setStyle('box', {'background-color':'steelblue'});

document.getElementById('button1').onclick = grow;
document.getElementById('button2').onclick = paintBlue;
