const users=[{id:1, name:'Babul', job:'doctor'} ];

// console.log(users[0].name)

const data={
    count:5000,
    data:[{id:1, name:'Abul', job:'leader'},
    {id:2, name:'labul', job:'leader'}]
}

const firstJob=data.data[0].job;
const user={
    id:5001,
    name:'Thomas alva edison',
    address:{
        street:{
            first:'34/3 kochukhet',
            second:'third floor',
            third:'right side'
        },
        postOffice:'contonment',
        city:'Dhaka'
    }
}

const userFloor=user.address?.stret?.second;
console.log(userFloor)