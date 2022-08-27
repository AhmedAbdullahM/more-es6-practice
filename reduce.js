// map forEach filter find reduce

const numbers=[1,2,9,3,2,4,5,6];
// .reduce accumulator function, intial value

// const total=numbers.reduce((previous,current)=>previous+current, 0);
const total=numbers.reduce((previous,current)=>{ 
    console.log(previous,current)
    return previous+current
}
  , 0);
console.log(total)