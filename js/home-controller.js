var gCanvas
var gCtx




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
    addListeners()
      
}

function addDataList(){
    var wordList=getSherchWord()
    console.log(wordList)
    var dataList=document.querySelector('datalist')
    wordList.forEach((word)=>{
        dataList.innerHTML+=`<option value="${word}">`
    })
}

function addSherchWordLine(){

}

function drawSticer(src,x,y,width,size){
    var img=new Image
    img.src=src
    console.log(`x:${x} y:${y}`)
    gCtx.drawImage(img,x,y,width,size)
    
}

function saveSticer(el,x=0,y=0){
    var pos={x:x,y:y}
    var size=gCanvas.height/4
    var width=gCanvas.width/4
    var src=el
    creatElementOnCanvas(pos,size,width,src)  
    renderCanvas()

}

function moveTonextPage(){
    document.querySelector('.gallery').style.display="none"
    document.querySelector('.aditor').style.display="flex"
}

 function renderCanvas(){
    var meme=getMeme()
    renderImgCanvas(meme.selectedImgId)
    var elemens=getElements()
    elemens.forEach((element)=>{
        drawSticer(element.src,element.pos.x,element.pos.y,element.width,element.size)
    })
    meme.lines.forEach((line)=>{
        renderTxtLine(line.txt,line.pos,line.align,line.size,line.color) 
    }) 
    var pos=meme.lines[meme.selectedLineIdx].pos
    drawRect(pos.x-10,pos.y-meme.lines[meme.selectedLineIdx].size,meme.lines[meme.selectedLineIdx].size) 


 }

function renderImgCanvas(id){
    debugger
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


function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader()

    reader.onload = (event) => {
        console.log('onload');
        var img = new Image()
            // Render on canvas
        img.src = event.target.result
        img.onload = onImageReady.bind(null, img)
    }
    console.log('after');
    reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}