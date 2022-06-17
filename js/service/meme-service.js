
var gMeme = {
    selectedImgId: '1',
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'AAD TEXT ',
            size: 40,
            align: 'left',
            color: 'black',
            isDrag: false,
            pos: { x: 20, y: 50 },
        },

        {
            txt: 'ADD TEXT ',
            size: 40,
            align: 'left',
            color: 'black',
            isDrag: false,
            pos: { x: 20, y: 250 },
        }]
}

function getMeme() {
    return gMeme
}

function addNewLine() {
    if (gMeme.lines.length === 3) return
    gMeme.lines.push(
        {
            txt: '',
            size: 40,
            align: 'left',
            color: 'black',
            isDrag: false,
            pos: { x: 20, y: 150 },
        }
    )
    console.log(gMeme)
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
    gMeme.selectedImgId = id
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


function changFontSize(num) {
    if (num === 0) {
        gMeme.lines[0].size -= 5
        gMeme.lines[1].size -= 5
    } else if (num === 1) {
        gMeme.lines[0].size += 5
        gMeme.lines[1].size += 5
    }
}




function getFont() {
    return `${gMeme.lines[gMeme.selectedLineIdx].size}px Arial`
}

function saveNewAline(direc) {
    gMeme.lines[0].align = direc
    gMeme.lines[1].align = direc
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