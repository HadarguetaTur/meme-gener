const STORAGE_KEY = 'Memes';
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs=createImgs();
console.log(gImgs)
var gFilterBy;



function createImgs() {
    var imgs=loadFromStorage(STORAGE_KEY)
    if(!imgs||!imgs.length){
        imgs = [
            { id: 1, url: makeUrl(1), keywords: ['tramp','funny' ]},
            { id: 2, url: makeUrl(2), keywords: ['dogs','love' ]},
            { id: 3, url: makeUrl(3), keywords: ['baby', 'cat',]},
            { id: 4, url: makeUrl(4), keywords: ['cat', 'cat']},
            { id: 5, url: makeUrl(5), keywords: ['baby', 'cat' ]},
            { id: 6, url: makeUrl(6), keywords: ['funny' , 'cat']},
            { id: 7, url: makeUrl(7), keywords: ['baby', 'cat'] },
            { id: 8, url: makeUrl(8), keywords: ['funny', 'cat',] },
            { id: 9, url: makeUrl(9), keywords: ['funny', 'cat',] },
        ];
    }

saveToStorage(STORAGE_KEY,imgs)
return imgs
}

function getSherchWord(){
    return ['tramp','funny','dogs','love','baby','cat']
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

