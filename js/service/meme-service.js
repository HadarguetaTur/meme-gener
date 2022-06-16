
var gMeme = {
    selectedImgId: '1',
    selectedLineIdx: '1',
    lines1: 
        {
            txt: ' ',
            size: 40,
            align: 'left',
            color: 'black',
            isDrag:false,
            pos:{x:50,y:50},
        },
    lines0: 
        {
            txt: ' ',
            size: 40,
            align: 'left',
            color: 'black',
            isDrag:false,
            pos:{x:50,y:250},
        }
    
}
console.log(gMeme)
function getMeme(){
    return gMeme
}

function istextClicked(clickedPos) {
    const { pos } = gCircle.lines
    // Calc the distance between two dots
    const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
    //If its smaller then the radius of the circle we are inside
    return distance <= gCircle.size
}

function moveText(dx, dy) {
    gCircle.pos.x += dx
    gCircle.pos.y += dy

}

function setTextDrag(isDrag) {
    gMeme.lines.isDrag = isDrag
}

function saveSelectId(id){
    gMeme.selectedImgId=id
}

function getId(){
    return gMeme.selectedImgId
}

function saveNewIdex(idx){
    gMeme.selectedLineIdx=idx    
}

function saveMemeText(txtLine){

    if(txtLine.idx==='0'){
        gMeme.lines0.txt=txtLine.txt
    }else if(txtLine.idx==='1'){
        gMeme.lines1.txt=txtLine.txt
    }
    
}


function changFontSize(num){
    if(num===0){
        gMeme.lines0.size-=5
        gMeme.lines1.size-=5
    }else if(num===1){
        gMeme.lines0.size+=5
        gMeme.lines1.size+=5
    }
}

function getFont(){
    return `${gMeme.lines0.size}px Arial`
}

function initTxt(){
    gMeme.lines0.txt=''
    gMeme.lines1.txt=''
}

function wichLine(){
    debugger
    var idx=gMeme.selectedLineIdx
    var selectLine={pos:{},txt:'',

    }
    if(idx==='0'){
        selectLine.pos=gMeme.lines0.pos
        selectLine.txt=gMeme.lines0.txt
    }else if(idx==='1'){
        selectLine.pos=gMeme.lines1.pos
        selectLine.txt=gMeme.lines1.txt
        
    }
    return selectLine
}