const friends=['Tom Hacks', 'Tom braddy', 'Tom crusie', 'Tom sulaiman' ];

friends.forEach(friend=>console.log(friend))
const products=[
    {id:1, name:'laptop', price:88000},
    {id:1, name:'phone', price:80000},
    {id:1, name:'smartWatch', price:45000},
    {id:1, name:'tablet', price:22000}
]
const newArray=[];
products.forEach(product=>newArray.push(product.name))
console.log(newArray)