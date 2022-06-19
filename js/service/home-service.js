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
            { id: 3, url: makeUrl(3), keywords: 'baby'},
            { id: 4, url: makeUrl(4), keywords: 'cat'},
            { id: 5, url: makeUrl(5), keywords: 'baby' },
            { id: 6, url: makeUrl(6), keywords: 'funny' },
            { id: 7, url: makeUrl(7), keywords: 'baby' },
            { id: 8, url: makeUrl(8), keywords: ['funny', 'cat',] },
            { id: 9, url: makeUrl(9), keywords: ['funny', 'cat',] },
        ];
    }

saveToStorage(STORAGE_KEY,imgs)
return imgs
}

function getSherchWord(){
    var words=[]
    gImgs.forEach((img) => {
        img.keywords.forEach((word)=>{
            words.push(word)
        })
    });
    const newWords = words.filter(function(item, pos) {
        return words.indexOf(item) == pos;
    })
    return newWords
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

