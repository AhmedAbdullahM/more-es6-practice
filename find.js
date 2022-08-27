const numbers=[41,25,51,54,11,25,16,84,9,4,8];
const five=numbers.find(n=>n%5 ===0);
const fiveFilter=numbers.filter(n=>n%5 === 0)
console.log(five)
console.log(fiveFilter)

const products=[
    {id:1, name:'laptop', price:88000},
    {id:2, name:'phone', price:80000},
    {id:3, name:'smartWatch', price:25000},
    {id:4, name:'tablet', price:22000}
]

const product=products.find(p=>p.price<40000)
console.log(product)