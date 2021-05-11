//For Peter
const PETER_HEIGHT = 10;
const PETER_WIDTH = 8;
const PETER_DEPTH = 10;
const gardenSizeInM2 = 100;
const paidPrice = 2500000;
const volumeInMeters = PETER_HEIGHT * PETER_WIDTH *PETER_DEPTH;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 ;
console.log(`The price of Peters house should be ${housePrice} but he paid ${paidPrice} `);
const priceDiff = paidPrice - housePrice;
if(priceDiff>0){
    console.log("Peter is paying too much");
}
    else{
        console.log("Peter you are lucky");
    }
// For Julia 
 const JULIA_HEIGHT = 8;
 const JULIA_WIDTH = 5;
 const JULIA_DEPTH = 11;
 gardenSizeInM2 = 70;
 paidPrice = 1000000;
 volumeInMeters = JULIA_HEIGHT * JULIA_WIDTH *JULIA_DEPTH;
 housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 ;
console.log(`The price of Juliass house should be ${housePrice} but she paid ${paidPrice} `);
priceDiff = paidPrice - housePrice;
if(priceDiff>0){
    console.log("Julia is paying too much");
}
    else{
        console.log("Julia you are lucky");
    }



