var gCanvasElements=[];



function creatElementOnCanvas(pos,size,width,src='') {

    var element = {
        pos: pos,
        size: size,
        width: width,
        src:src,
        isDrag: false,
        isClick: false
    }
gCanvasElements.push(element)

    console.log(gCanvasElements)
}
function isElementClick(clickedPos) {
    debugger
    gCanvasElements.forEach((element) => {
        const distance = Math.sqrt((element.pos.x - clickedPos.x) ** 2 + (element.pos.y - clickedPos.y) ** 2)    
        if (distance <= element.size) {
            element.isClick = true
            element.isDrag = true
            return true
     
        }
    });
    return false
}

function moveElement(dx, dy) {
    var element=getElement()
    element.pos.x += dx
    element.pos.y += dy

}


function getElement() {
    for(var i=0;i<gCanvasElements.length;i++){
        if(gCanvasElements[i].isDrag)return gCanvasElements[i]
    }
}

function setElementDrag(val){
    var element=getElement()
    element.isClick=val
    element.isDrag=val

}

function getElements(){
    return gCanvasElements
}