// const cube=x=> x*x*x; 
// // console.log(cube(2)) 
// const [a, b] = [1,2,3,4,45,5]; 
// // console.log(a+b);
// const {x, y, z} = {x: 1, y1: 2, z: 3};
// // console.log(y)

// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);

// const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
// const product = {
//     name: 'Laptop', 
//     model:'Yoga 3',
//     price:49000, 
//     dusk: '512SSD'
//     }

//     const {price}=product;
//     // console.log(price)

// -----------------------------------------------------------
// 1
const mon=5;
const ox=1;
// 2

let summary=`

this is your template ${mon} and ${ox}`;
// 3
const arrowFu=(n)=>n*5;
// console.log(arrowFu(5))
// 3.2
const add=(first,second)=>(first+2)*(second+2);
// console.log(add(2,3))
// {

//     const f1=first+2
//     const f2=second+2
//     const ff=f1*f2;

//     return ff;
// }

// 3.3
const multiplication=(first,second,third)=>first*second*third;

// console.log(multiplication(2,3,1))

// 5 
const newArray=[]
const array=[5,3,3,5].map(n=>newArray.push(n*5))
// console.log(newArray)
//  6

const array2=[5,45,77,12,64,78,98,36,21].filter(o=>o%2!==0)
// console.log(array2)

// 7

const devices=[
    {phone:'iphone-1', price:20000, origin:'USA'},
    {phone:'iphone-7', price:22000, origin:'USA'},
    {phone:'iphone-8', price:27000, origin:'USA'},
    {phone:'Itel', price:5000, origin:'BDesh'},
    
];

const device=devices.find(p=>p.price<6000)
// console.log(device)
// 8 
const {phone,price}={phone:'iphone-9', price:40000, origin:'USA'};
const cost=price;
// console.log(cost)

const [first,second,third]=[77,12,64,78,98,36,21];
const three=third;

// console.log(three)

// last 

function added(num1,num2,num3 = 6){
    total=num1+num2+num3;
    return total;

}

// console.log(added(4,2))