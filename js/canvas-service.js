var gCanvas;
var gCtx;

var gMeme = [];
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
var gCurrImg;
var gCurrLine;
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
  gCurrLine = 0;
}

function createMeme(imgId, txt = '', selectedLineIdx = 0, size = 30, align = 'center', color = 'black', x = 0, y = 0) {
  let meme = {
    selectedImgId: imgId,
    selectedLineIdx,
    lines: [
      {
        txt,
        size,
        align,
        color,
        x,
        y
      }
    ]
  }
  gMeme.push(meme);
}

function drawText(text) {
  updateMeme(text);
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = getLineColor();
  gCtx.fillStyle = 'white';
  gCtx.font = `30px Impact`;
  gCtx.textAlign = gMeme[gCurrImg].lines[gCurrLine].align;
  gCtx.fillText(getText(), getX(), getY());
  gCtx.strokeText(getText(), getX(), getY());
  updateCurrLine();
}

function updateMeme(text) {
  gMeme[gCurrImg].lines[gCurrLine].txt = text;
}

function getLineColor() {
  return gMeme[gCurrImg].lines[gCurrLine].color;
}

function getLineFont() {
  return `${gMeme[gCurrImg].lines[gCurrLine].size} px Impact`;
}

function setText(text) {
  if (gCurrLine) gMeme[gCurrImg].lines.push({

  })
  gMeme[gCurrImg].lines[gCurrLine].txt = text;
}

function getText() {
  return gMeme[gCurrImg].lines[gCurrLine].txt;
}

function getImgs() {
  return gImgs;
}

function getX() {
  return gLines[gCurrLine].x;
}
function getY() {
  return gLines[gCurrLine].y;
}

function updateCurrLine() {
  gCurrLine++;
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

function updateCurrImg(imgId) {
  gCurrImg = gMeme.findIndex(meme => {
    return meme.selectedImgId === imgId;
  })
}