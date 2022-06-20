var gCanvas
var gCtx
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']



function init() {
    renderImgs()
    gCanvas = document.querySelector('.paint-here')
    gCtx = gCanvas.getContext('2d')  
    addDataList()    
}



function renderImgs() {
    const imgs = getImgByFillter()
    console.log(imgs)
    const grid = document.querySelector('.grid')
    grid.innerHTML =' '
    for (let i = 0; i < imgs.length; i++) {
        var img = imgs[i]
        grid.innerHTML += `<div class="img-div"><img onclick="getSelectId(${img.id})" src=${img.url} alt="${img.id}" class="img ${img.id}"></div>`
    }
}


function onSetWord(serchWord) {
    getFilterBy(serchWord.word)
    renderImgs()
}

function getSelectId(id) {
    saveSelectId(id)
    moveTonextPage()
    renderCanvas()  
      
}

function addDataList(){
    debugger
    var wordList=getSherchWord()
    console.log(wordList)
    var dataList=document.querySelector('datalist')
    wordList.forEach((word)=>{
        dataList.innerHTML+=`<option value="${word}">`
    })
}

function addSherchWordLine(){

}

function drawSticer(el){
    
    console.log(el)
    var img=new Image
    img.src=el
    gCtx.drawImage(img,0,0,gCanvas.width/2,gCanvas.height/2)
  
}

function moveTonextPage(){
    document.querySelector('.gallery').style.display="none"
    document.querySelector('.aditor').style.display="flex"
}

 function renderCanvas(){
    var meme=getMeme()
    renderImgCanvas(meme.selectedImgId)
    meme.lines.forEach((line)=>{
        renderTxtLine(line.txt,line.pos,line.align,line.size,line.color) 
    }) 
    var pos=meme.lines[meme.selectedLineIdx].pos
    drawRect(pos.x-10,pos.y-meme.lines[meme.selectedLineIdx].size,meme.lines[meme.selectedLineIdx].size)  
 }

function renderImgCanvas(id){
    var src=`/img/${id}.jpg`
    var img=new Image
    img.src=src
    gCtx.drawImage(img,0,0,gCanvas.width,gCanvas.height)
}

function renderTxtLine(text,pos,align,size,color){
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle =color;
    gCtx.font = `${size}px Impact`;
    gCtx.direction=align
    gCtx.fillText(text, pos.x, pos.y);  
    gCtx.strokeText(text, pos.x, pos.y);
}

function addLine(){
    addNewLine() 
    setIdx()   
}

function setNewText(textLine){
    saveMemeText(textLine) 
    renderCanvas()
}

function textColor(color){
    changColorLine(color)
    renderCanvas()
}

function changDir(direc){
    saveNewAline(direc)
    renderCanvas()
}


function setIdx(){
    saveNewIdex()
    renderCanvas()   
}



function clearCanva(){
    initTxt()
    renderCanvas()
}


function changeSize(num){
    changFontSize(num)
    renderCanvas()
}

function randomImg(){
    saveSelectId('random')
    moveTonextPage()
    renderCanvas()  
}


function drawRect(x,y,height){
    gCtx.beginPath();
    gCtx.rect(x, y, 530, height+10);
    gCtx.strokeStyle = 'yellow';
    gCtx.stroke();
}

function cleanRect(){
    var meme=getMeme()
    renderImgCanvas(meme.selectedImgId)
    meme.lines.forEach((line)=>{
        renderTxtLine(line.txt,line.pos,line.align) 
    }) 
}

function downloadCanvas(elLink) { 
    cleanRect()
    const data = gCanvas.toDataURL();
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

