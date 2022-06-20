
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gStartPos={
    x:20,
    y:250,
};
function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        // resizeCanvas()
        renderCanvas()
    })
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    if (!isElementIsClick(pos)) return
    gStartPos = pos
    saveNewPos(pos)
    document.body.style.cursor = 'grabbing'

}

function onMove(ev) {
    const element = getElement();
    if (!element) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y -gStartPos.y
    moveElement(dx, dy)
    gStartPos = pos
    renderCanvas()
}

function onUp() {
    // setElementIsClick()
    document.body.style.cursor = 'unset'   
}

// function resizeCanvas() {
//     const elContainer = document.querySelector('.div-canvas')
//     gCanvas.width = elContainer.offsetWidth
//     gCanvas.height = elContainer.offsetHeight
// }

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft,
            y: ev.pageY - ev.target.offsetTop
        }
    }
    return pos
}


