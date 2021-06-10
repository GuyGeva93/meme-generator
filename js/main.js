var gCanvas;
var gCtx;

function init() {
  initCanvas();
  renderGallery();
}

function renderGallery() {
  var imgs = getImgs();
  var strHtmls = document.querySelector('.images-container');
  imgs.forEach(img => {
    strHtmls.innerHTML += `<div class="img-cell"><img onclick="showCanvas(id)" id="${img.id}" src=${img.url} alt=""></div >`;
  })
}

function draw() {
  let elTextInput = document.querySelector('input[name=text]');
  if (!elTextInput.value) return;
  // const offsetX = ev.offsetX;
  // const offsetY = ev.offsetY;
  drawText(elTextInput.value);
  elTextInput.value = '';
}

function showCanvas(imgId) {
  let elMain = document.querySelector('.images-container');
  let elCanvas = document.querySelector('.canvas-container');
  elMain.style.display = 'none';
  elCanvas.style.display = 'flex';
  createMeme(imgId);
  drawImg(imgId);
  updateCurrImg(imgId);
}

function onNavToGallery() {
  let elMain = document.querySelector('.images-container');
  let elCanvas = document.querySelector('.canvas-container');
  elMain.style.display = 'grid';
  elCanvas.style.display = 'none';
}