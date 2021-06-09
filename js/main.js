var gCanvas;
var gCtx;

function init() {
  gCanvas = document.querySelector('canvas');
  gCtx = gCanvas.getContext('2d');
  renderGallery();
}

function renderGallery() {
  var imgs = getImgs();
  var strHtmls = document.querySelector('.images-container');
  imgs.forEach(img => {
    strHtmls.innerHTML += `<div class="img-cell"><img onclick="showCanvas(id)" id="${img.id}" src=${img.url} alt=""></div >`;
  })
}

function draw(x, y) {
  let elTextInput = document.querySelector('input[name=text]');
  // const offsetX = ev.offsetX;
  // const offsetY = ev.offsetY;
  drawText(elTextInput.value, x, y);
  elTextInput.value = '';
}


function showCanvas(imgId) {
  let elMain = document.querySelector('.images-container');
  let elCanvas = document.querySelector('.canvas-container');
  elMain.style.display = 'none';
  elCanvas.style.display = 'flex';
  drawImg(imgId);
}