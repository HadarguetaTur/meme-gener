
var gMeme = {
    selectedImgId: '1',
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'add text  ',
            size: 40,
            align: 'left',
            color: '#ffff',
            isDrag: false,
            pos: { x: 20, y: 50 },
        },

]
}

const memHight = document.querySelector('canvas').height
const memWidth=document.querySelector('canvas').width


function getMeme() {
    return gMeme
}

function addNewLine() {
    if (gMeme.lines.length === 2) return
    gMeme.lines.push(
        {
            txt: 'add text',
            size: 40,
            align: 'left',
            color: '#fffff',
            isDrag: false,
            pos: { x: 20, y: 500},
        }
    )
}

function istextClicked(clickedPos) {
    const { pos } = gCircle.lines
    const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
    return distance <= gCircle.size
}

function moveText(dx, dy) {
    gCircle.pos.x += dx
    gCircle.pos.y += dy
}

function setTextDrag(isDrag) {
    gMeme.lines.isDrag = isDrag
}

function saveSelectId(id) {
    debugger
    gMeme.selectedImgId = id
    if(id==='random'){
        gMeme.selectedImgId= getRandomInt(1,gImgs.length)
    }

}

function getId() {
    return gMeme.selectedImgId
}

function saveNewIdex() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
}

function saveMemeText(txtLine) {
    var idx=gMeme.selectedLineIdx
    gMeme.lines[idx].txt = txtLine.txt
    
}

function changColorLine(color){
    gMeme.lines[gMeme.selectedLineIdx].color=color
}
function changFontSize(num) {
    gMeme.lines[gMeme.selectedLineIdx].size+=num
}




function saveNewAline(direc) {
    debugger
    if(direc==='center'){
        gMeme.lines[gMeme.selectedLineIdx].align=direc
        gMeme.lines[gMeme.selectedLineIdx].pos.x=memWidth/3
    }else if(direc==='right'){
        gMeme.lines[gMeme.selectedLineIdx].align=direc
        gMeme.lines[gMeme.selectedLineIdx].pos.x=memWidth-150
    }else if(direc==='left'){
        gMeme.lines[gMeme.selectedLineIdx].align=direc
        gMeme.lines[gMeme.selectedLineIdx].pos.x=20
    }
}


function initTxt() {
    gMeme.lines.forEach((line) => {
        line.txt =' '
    })
}

function wichLine() {
    var idx = +gMeme.selectedLineIdx
    return gMeme.lines[idx]
}