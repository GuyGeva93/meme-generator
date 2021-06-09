
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


function createMeme(imgId, txt, selectedLineIdx = 0, size = 30, align = 'center', color = 'black') {
  let meme = {
    selectedImgId: imgId,
    selectedLineIdx,
    lines: [
      {
        txt,
        size,
        align,
        color
      }
    ]
  }
  gMeme.push(meme);
}

function drawText(text, x = 250, y = 60) {
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = gMeme.lines[0].color;
  gCtx.fillStyle = 'white';
  gCtx.font = gMeme.lines[0].size + 'px impact';
  gCtx.textAlign = gMeme.lines[0].align;
  gCtx.fillText(gMeme.lines[0].txt, x, y);
  gCtx.strokeText(gMeme.lines[0].txt, x, y);
}

function removeLine() {
  gMeme.lines[0].txt = '';
  gCtx.fillText(gMeme.lines[0].txt, 250, 60);
  gCtx.strokeText(gMeme.lines[0].txt, 250, 60);
}

function getImgs() {
  return gImgs;
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
