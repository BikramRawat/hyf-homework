function weatherBasedWear(temp){
    if(temp<=0){
        return `wear a long warm thermo/winter coats: its very cold`;
    }
    else if(temp<=20){
        return `you can wear normal dress with some jacket or sweater`;
    }
    else if(temp<=35){
        return `Wear half shorts and t-shirts`;
    }
    else{
        return `Its too hot , dont go outside or use proper sun glas and light white clothes`;
    }
}
const clothesTOWear1=weatherBasedWear(15);
console.log(clothesTOWear1);

const clothesTOWear2=weatherBasedWear(40);
console.log(clothesTOWear2);

const clothesTOWear3=weatherBasedWear(-7);
console.log(clothesTOWear3);

const clothesTOWear4=weatherBasedWear(30);
console.log(clothesTOWear4);


