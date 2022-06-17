var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs=createImgs();
console.log(gImgs)
var gFilterBy;



function createImgs() {
    debugger
    const imgs = [
        { id: 1, url: makeUrl(1), keywords: ['TRANP', 'funny',] },
        { id: 2, url: makeUrl(2), keywords: ['dogs', 'baby',] },
        { id: 3, url: makeUrl(3), keywords: ['dogs', 'baby',] },
        { id: 4, url: makeUrl(4), keywords: ['cat', 'sleep',] },
        { id: 5, url: makeUrl(5), keywords: ['baby', 'strong',] },
        { id: 6, url: makeUrl(6), keywords: ['funny', 'cat',] },
        { id: 7, url: makeUrl(7), keywords: ['funny', 'cat',] },
        { id: 8, url: makeUrl(8), keywords: ['funny', 'cat',] },
        { id: 9, url: makeUrl(9), keywords: ['funny', 'cat',] },
    ];
 
    return imgs
}


function makeUrl(num){
    return `"img/${num}.jpg"`
}

function getFilterBy(serchWord){
    gFilterBy=serchWord
    console.log(gFilterBy)
}

function getImgByFillter(){
    if(!gFilterBy)return gImgs
    const imgs = gImgs.filter((img) => img.keywords.includes(gFilterBy))    
    return imgs
}

