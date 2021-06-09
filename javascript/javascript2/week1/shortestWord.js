const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium", ""];

const findShortestWord = function(array){
    let shortestWordInArray = array[0];

    for(let word of array){
        if(word.length && word.length < shortestWordInArray.length){
                shortestWordInArray = word;
        }
    }
    return shortestWordInArray;
}

console.log(findShortestWord(danishWords));