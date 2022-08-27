// var let const
const numbers=[843,894,93,92,10,03,45,84,96];
// let salary=450;
// salary=455;

// let kobita=`add ${numbers}  add ${salary}`;
// console.log(kobita)

// 2 default parameter

function getSalary(salary, tax,bonus = 0){

    const remaining=salary-salary*tax;
    total=remaining+bonus;
    return total;
}

// template string

const elementHTML=`
<div> 
<h3>Address</h3>
<P>Name:</P>
<P>Phone:</P>
<P>Age:</P>
<P>salary:${getSalary(5000,0.1)}</P>
</div>`

// 4 arrow function 

const doubleIt=x=>x*2;
const getSalary2=(salary,tax,bonus) => salary-salary*tax+bonus;

// 5 ... spread 

const ages=[12,12,9,13,32,14,15,16];
const newAges=[...ages, 23]

// 6 destructuring

const {x,y,...c} ={x:23,y:33,z:22, name:'hasan', salary:50000}

const [one ,two, three,...z]=[44,55,66,9,88];
console.log(z)