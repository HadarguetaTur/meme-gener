var gCanvasElements = [];



function creatElementOnCanvas(pos, size, width, src = '') {
    var element = {
        pos: pos,
        size: size,
        width: width,
        src: src,
        isDrag: false,
        isClick:false
    }
    gCanvasElements.push(element)


}
function isElementIsClick(isClickedPos) {
    gCanvasElements.forEach((element) => {
        var s = element.size * element.width
        var h = (element.pos.x + isClickedPos.y) * (element.pos.y + isClickedPos.y)
        if (h <= s) {
            element.isClick=true
            return true
        }
    });
    return false
}

function moveElement(dx, dy) {
    var element = getElement()
    element.pos.x += dx
    element.pos.y += dy
    element.pos.x = Math.abs(element.pos.x)
    element.pos.y = Math.abs(element.pos.y)


}


function getElement() {
    for (var i = 0; i < gCanvasElements.length; i++) {
        if (gCanvasElements[i].isClick) {
            return gCanvasElements[i]
            
        }
    }

}

function setElementIsClick() {
    const element = getElement()
    console.log(element)
    element.isClick=false
}

function getElements() {
    return gCanvasElements
}

