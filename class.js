class Instructor{
    name;
    designation='web designation'
    team='web team'
    location;
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    startSupporSession(time){
        console.log(`start support session ${time}`)
    }
    createQuiz(module){
        console.log(`create for module ${module}`)
    }

}

const aamir=new Instructor('aamir', 'mumbai');
const solaiman=new Instructor('solaiman', 'Dhaka');
console.log(aamir)
aamir.startSupporSession(`9.00`)
aamir.createQuiz(60)
console.log(solaiman)