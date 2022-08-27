const numbers=[44,22,70];
const half=numbers.map(n=>n/2)
console.log(half)
const third=numbers.map(x=>x/3)
console.log(third)

const friends=['Tom Hacks', 'Tom braddy', 'Tom crusie', 'Tom sulaiman' ];

const firstLetter=friends.map(friend=>friend[6])
console.log(firstLetter)
const friendsLength=friends.map(friend=>friend.length)
console.log(friendsLength)

const products=[
    {id:1, name:'laptop', price:88000},
    {id:1, name:'phone', price:80000},
    {id:1, name:'smartWatch', price:45000},
    {id:1, name:'tablet', price:22000}
]

const items=products.map(product=>product.name);
console.log(items)
const price=products.map(p=>p.price);
console.log(price)