var gCanvas
var gCtx
var gStarTextPos={x:50,y:50};
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']



function init() {
    renderImgs()
    gCanvas = document.querySelector('.paint-here')
    gCtx = gCanvas.getContext('2d')
    
}



function renderImgs() {
    const imgs = getImgByFillter()
    console.log(imgs)
    const grid = document.querySelector('.grid')
    for (let i = 0; i < imgs.length; i++) {
        var img = imgs[i]
        grid.innerHTML += `<div class="img-div"><img onclick="getSelectId(${img.id})" src=${img.url} alt="${img.id}" class="img ${img.id}"></div>`
    }
}


function onSetWord(serchWord) {
    getFilterBy(serchWord)
    renderImgs()
}

function getSelectId(id) {
    saveSelectId(id)
    moveTonextPage()
    renderCanvas()
      
}

function moveTonextPage(){
    document.querySelector('.gallery').style.display="none"
    document.querySelector('.aditor').style.display="flex"
}
 function renderCanvas(){
    var meme=getMeme()
    renderImgCanvas(meme.selectedImgId)
    var line=wichLine()
    console.log(line)
    renderTxtLine(line.txt,line.pos) 
    
 }


function renderImgCanvas(id){
    var src=`/img/${id}.jpg`
    var img=new Image
    img.src=src
    gCtx.drawImage(img,0,0,gCanvas.width,gCanvas.height)
}


function renderTxtLine(text,pos){
    debugger
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'white';
    gCtx.fillStyle = 'black';
    gCtx.font = getFont();
    gCtx.fillText(text, pos.x, pos.y);
    gCtx.strokeText(text, pos.x, pos.y);
}

function addLine(){
    document.querySelector('.text-line-bottom').style.display="flex"

     
}



function setNewText(textLine){
    saveMemeText(textLine) 
    saveNewIdex(textLine.idx)
    var line=wichLine()
    renderTxtLine(line.txt,line.pos) 
}





function clearCanva(){
    initTxt()
    renderCanvas()
}

function changeSize(num){
    changFontSize(num)
    renderCanvas()
}

function downloadCanvas(elLink) {
    
    const data = gCanvas.toDataURL();
    console.log('data', data);
    elLink.href = data;
    elLink.download = 'my-meme';
  }


function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function onDown(ev) {
    const pos = getEvPos(ev)
    if (!isCircleClicked(pos)) return
    setCircleDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'

}

function onMove(ev) {
    const circle = getCircle();
    if (circle.isDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveCircle(dx, dy)
        gStartPos = pos
        renderCanvas()
    }
}

function onUp() {
    setCircleDrag(false)
    document.body.style.cursor = 'grab'
}

