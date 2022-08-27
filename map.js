const numbers=[4,5,2,6,3];
const output=[];

for(number of numbers){
    double=number*2;
    output.push(double)
}

function getDouble(numbers){
   
    const output=[];
for(number of numbers){
    double=doubleIt(number);
    output.push(double)
}
    return output;
}

// function doubleItOld(number){
//     return number*2;
// }

const doubleIt =num=>num*2
const makeDouble=numbers.map(doubleIt)
const makeDoubleDirect=numbers.map(num=>num*2);
const makeDoubleDirect2=numbers.map(x=>x*2);
// console.log(makeDoubleDirect)
// const result= getDouble(numbers)
// console.log(result)
// console.log(makeDouble)

const fiveTimes=[1,2,3,4,5].map(x=>x*5);
console.log(fiveTimes)