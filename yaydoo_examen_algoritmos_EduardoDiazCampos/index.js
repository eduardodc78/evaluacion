let RandomArray = require('./randomArray');

let elements = 3; // max elements in a arrays
let alicePoints = 0;
let bobPoints = 0;

let a = new RandomArray(elements);
let b = new RandomArray(elements);

for (let i = 0; i < a.values.length; i++) {
    if( a.values[i] > b.values[i] ){
        alicePoints++;
    } 
    if( a.values[i] < b.values[i]) {
        bobPoints++;
    }    
}

console.log(`Values in array of Alice: [${a.values}]`);
console.log(`Values in array of Bob: [${b.values}]`);
console.log(`Results: [${alicePoints},${bobPoints}]`);










