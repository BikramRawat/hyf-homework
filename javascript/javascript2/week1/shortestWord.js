const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium", ""];

const findshortestWord = function(array){
    let shortestWordInArray = array[0];

    for(let word of array){
        if(word.length !== 0){
            if(word.length < shortestWordInArray.length){
                shortestWordInArray = word;
            }
        }
    }
    return shortestWordInArray;
}

console.log(findshortestWord(danishWords));