var gCanvas;
var gCtx;

var gMeme;

var gImgs = [{
  id: 1,
  url: 'img/1.jpg'
}
  , {
  id: 2,
  url: 'img/2.jpg'
}
  , {
  id: 3,
  url: 'img/3.jpg'
}, {
  id: 4,
  url: 'img/4.jpg'
}, {
  id: 5,
  url: 'img/5.jpg'
}, {
  id: 6,
  url: 'img/6.jpg'
}, {
  id: 7,
  url: 'img/7.jpg'
}, {
  id: 8,
  url: 'img/8.jpg'
}, {
  id: 9,
  url: 'img/9.jpg'
}, {
  id: 10,
  url: 'img/10.jpg'
}, {
  id: 11,
  url: 'img/11.jpg'
}, {
  id: 12,
  url: 'img/12.jpg'
}, {
  id: 13,
  url: 'img/13.jpg'
}, {
  id: 14,
  url: 'img/14.jpg'
}, {
  id: 15,
  url: 'img/15.jpg'
}, {
  id: 16,
  url: 'img/16.jpg'
}, {
  id: 17,
  url: 'img/17.jpg'
}, {
  id: 18,
  url: 'img/18.jpg'
}
]

var gLines = [{
  x: 250,
  y: 60
}, {
  x: 250,
  y: 470
}, {
  x: 250,
  y: 250
}
]

function initCanvas() {
  gCanvas = document.querySelector('canvas');
  gCtx = gCanvas.getContext('2d');
}

function createMeme(imgId) {

  let meme = {
    selectedImgId: imgId,
    selectedLineIdx: -1,
    lines: []
  }
  gMeme = meme;
}

function deleteMeme() {
  gMeme = null;
}

function getMeme() {
  return gMeme;
}

function createLine(txt, size = 30, align = 'center', color = 'black') {
  updateLineIdx();
  let line = {
    txt,
    size,
    align,
    color,
    x: getX(),
    y: getY()
  }
  gMeme.lines.push(line);
  drawLine();
}

function updateLineIdx() {
  if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0;
  else gMeme.selectedLineIdx++;
}

function drawLine() {
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = getColor();
  gCtx.fillStyle = 'white';
  gCtx.font = `${getSize()} Impact`;
  gCtx.textAlign = getALign();
  gCtx.fillText(getText(), getX(), getY());
  gCtx.strokeText(getText(), getX(), getY());

}

function renderLines() {
  if (!gMeme.lines.length) return;
  gMeme.lines.map(line => {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = line.color;
    gCtx.fillStyle = 'white';
    gCtx.font = `${getSize()} Impact`;
    gCtx.textAlign = line.align;
    gCtx.fillText(line.txt, line.x, line.y);
    gCtx.strokeText(line.txt, line.x, line.y);
  })
}

function removeLine() {
  let lines = gMeme.lines;
  gMeme.lines = lines.slice(gMeme.selectedLineIdx, 1);
  renderLines();
}

function drawRect() {
  gCtx.beginPath();
  gCtx.rect(30, getY() - 40, 450, 60);
  gCtx.strokeStyle = 'red';
  gCtx.stroke();
}

function checkLine(x, y) {
  if (!gMeme[selectedImgId].lines.length) return;
}

function getColor() {
  return gMeme.lines[gMeme.selectedLineIdx].color
}

function setColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function getSize() {
  return `${gMeme.lines[gMeme.selectedLineIdx].size}px`
}

function setSize(size) {
  gMeme.lines[gMeme.selectedLineIdx].size += size;
  renderLines();
}

function getALign() {
  return gMeme.lines[gMeme.selectedLineIdx].align
}

function setAlign(direction) {
  gMeme.lines[gMeme.selectedLineIdx].align = direction;
  renderLines();
}

// function setFont(size) {
//   gMeme[selectedImgId].lines[selectedLineIdx].size = `${} size`;
// }

// function getFont() {
//   return `${gMeme[selectedImgId].lines[selectedLineIdx].size}px Impact`;
// }

// function setText(text) {
//   // ...
//   //renderLine()
//   gMeme.lines[selectedLineIdx].txt = text;
// }

function getText() {
  return gMeme.lines[gMeme.selectedLineIdx].txt
}

function getImgs() {
  return gImgs
}

function getX() {
  if (gMeme.selectedLineIdx > 2) return gLines[2].x;
  return gLines[gMeme.selectedLineIdx].x;
}
function getY() {
  if (!gMeme.selectedLineIdx) return 60;
  else if (gMeme.selectedLineIdx === 1) return 470;
  else return 250;

}

function setCurrLine() {
  gMeme[selectedImgId].selectedLineIdx++;
}

function loadImages(id) {
  let imageIdx = gImgs.findIndex(img => {
    return (img.selectedImgId === id);
  })
  return imageIdx;
}

function drawImg(imgId) {
  let img = new Image();
  img.src = gImgs[imgId - 1].url;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
  }
}

function renderImage() {
  let img = new Image();
  img.src = gImgs[gMeme.selectedImgId - 1].url;
  // img.onload = () => {
  //   gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
  // }
  gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}


function downloadCanvas(elLink) {
  let imgContent = gCanvas.toDataURL('image/jpg');
  elLink.href = imgContent;
}