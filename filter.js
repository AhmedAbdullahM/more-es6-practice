const numbers=[41,25,51,54,11,25,16,84,9,4,8];
const bigNumbers=numbers.filter(number=> number>20);
const tiny=numbers.filter(n=> n<10)
const even=numbers.filter(num=>num%2 ===0);
// console.log(even)
// console.log(bigNumbers)

// console.log(tiny)

const products=[
    {id:1, name:'laptop', price:88000},
    {id:1, name:'phone', price:80000},
    {id:1, name:'smartWatch', price:45000},
    {id:1, name:'tablet', price:22000}
]

const expensive=products.filter(product=> product.price>33000)
console.log(expensive)