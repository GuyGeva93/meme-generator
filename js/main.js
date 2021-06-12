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
  createLine(elTextInput.value);
  elTextInput.value = '';
}

function showCanvas(imgId) {
  let elMain = document.querySelector('.images-container');
  let elCanvas = document.querySelector('.canvas-container');
  elMain.style.display = 'none';
  elCanvas.style.display = 'flex';
  createMeme(imgId);
  drawImg(imgId);
}

function renderCanvas() {
  let currMeme = getMeme();

}

function onNavToGallery() {
  let elMain = document.querySelector('.images-container');
  let elCanvas = document.querySelector('.canvas-container');
  elMain.style.display = 'grid';
  elCanvas.style.display = 'none';
  deleteMeme();
}

function onDownloadCanvas(elLink) {
  downloadCanvas(elLink);
}

function onSwitchLines() {
  updateLineIdx();
  console.log(gMeme.selectedLineIdx);
}

function onIncFont() {
  renderImage();
  setSize(10);
}
function onDecFont() {
  renderImage();
  setSize(-10);
}

function onAlignLeft() {
  renderImage();
  setAlign('right');
}
function onAlignCenter() {
  renderImage();
  setAlign('center');
}
function onAlignRight() {
  renderImage();
  setAlign('left');
}

function onRemoveLine() {
  renderImage();
  removeLine();
}

// function onCanvasClick(ev) {
//   // debugger
//   let x = ev.offsetX;
//   let y = ev.offsetY;
//   checkLine(x, y);

// }

// function onTextMove(ev) {
//   console.log(ev.offsetX);
//   console.log(ev.offsetY);
// }