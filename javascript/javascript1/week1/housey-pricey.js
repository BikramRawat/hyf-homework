//For Peter
let height = 10;
let width = 8;
let depth = 10;
let gardenSizeInM2 = 100;
let paidPrice = 2500000;
let volumeInMeters = height * width *depth;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 ;
console.log(`The price of Peters house should be ${housePrice} but he paid ${paidPrice} `);
let priceDiff = paidPrice - housePrice;
if(priceDiff>0){
    console.log("Peter is paying too much");
}
    else{
        console.log("Peter you are lucky");
    }
// For Julia 
 height = 8;
 width = 5;
 depth = 11;
 gardenSizeInM2 = 70;
 paidPrice = 1000000;
 volumeInMeters = height * width *depth;
 housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 ;
console.log(`The price of Juliass house should be ${housePrice} but she paid ${paidPrice} `);
priceDiff = paidPrice - housePrice;
if(priceDiff>0){
    console.log("Julia is paying too much");
}
    else{
        console.log("Julia you are lucky");
    }



