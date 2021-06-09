var gCanvas;
var gCtx;

function init() {
  gCanvas = document.querySelector('canvas');
  gCtx = gCanvas.getContext('2d');
  loadImages();
  // drawImgFromSameDomain();
}

function draw(x, y) {

  let elTextInput = document.querySelector('input[name=text]');
  // const offsetX = ev.offsetX;
  // const offsetY = ev.offsetY;
  drawText(elTextInput.value, x, y);
  elTextInput.value = '';
  // switch (gCurrShape) {
  //   case 'triangle':
  //     drawTriangle(offsetX, offsetY)
  //     break;
  //   case 'rect':
  //     drawRect(offsetX, offsetY)
  //     break;
  //   case 'text':
  //     drawText('Puki', offsetX, offsetY)
  //     break;
  //   case 'line':
  //     drawLine(offsetX, offsetY)
  //     break;
  // }
}

function drawText(text, x = 250, y = 60) {
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = 'black';
  gCtx.fillStyle = 'white';
  gCtx.font = '30px Impact';
  gCtx.textAlign = 'center';
  gCtx.fillText(text, x, y);
  gCtx.strokeText(text, x, y);
  createText(text);
}



function showCanvas() {
  let elCanvas = document.querySelector('.canvas-container');
  elCanvas.style.visibility = 'visible';
  let elMain = document.querySelector('.image-gallery');
  elMain.style.visibility = 'hidden';
}