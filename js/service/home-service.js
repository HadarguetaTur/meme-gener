var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = createImgs();
var gFilterBy;



function createImgs() {
    const imgs = [];
    for (var i = 1; i < 10; i++) {
        var img = { id: `${i}`, url: `"/img/${i}.jpg"`, keywords: ['funny', 'cat',] }
        imgs.push(img)
    }
    return imgs
}




function getFilterBy(serchWord){
    gFilterBy=serchWord
}

function getImgByFillter(){
    if(!gFilterBy)return gImgs
    const imgs = gImgs.filter((img) => img.keywords.includes(gFilterBy))    
    return imgs
}

