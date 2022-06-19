
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
var locY=500
const memHight = document.querySelector('canvas').height
const memWidth = document.querySelector('canvas').width


function getMeme() {
    return gMeme
}

function addNewLine() {
    if (gMeme.lines.length === 4) return
    gMeme.lines.push(
        {
            txt: 'add text',
            size: 40,
            align: 'left',
            color: '#fffff',
            isDrag: false,
            pos: { x: 20, y: locY},
        }
        
       
    )
 locY=locY/2
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
    gMeme.lines[gMeme.selectedLineIdx].txt=''

}

function wichLine() {
    var idx = +gMeme.selectedLineIdx
    return gMeme.lines[idx]
}