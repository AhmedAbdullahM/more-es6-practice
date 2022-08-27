class teamMember{
    name;
    location;
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    provideFeedback(){
        console.log(` ${this.name} thank you for your feedback.`)
    }
}




class Instructor extends teamMember{
    
    designation='web designation'
    team='web team'
    
    constructor(name,location){
        super(name,location)
    }
    startSupporSession(time){
        console.log(`start support session ${time}`)
    }
    createQuiz(module){
        console.log(`create for module ${module}`)
    }
   
}


class Developer extends teamMember{
    
    designation='web designation'
    team='web team'
    tech;
    constructor(name,location,tech){
        super(name,location)
        this.tech=tech;
    }
    developFeature(feature){
        console.log(`please develop the ${feature}`)
    }
   releas(version){
        console.log(`please release the version ${version}`)
    }
    
}

class JobPlacement extends teamMember{
    
    designation='job placement commandos'
    team='job placement'
    region;
    constructor(name,location,region){
        super(name,location)
        this.region=region;
    }
    providresume(resume){
        console.log(`please provide the ${resume}`)
    }
   prepareStudent(version){
        console.log(`please release the version ${version}`)
    }
   
}

const alia=new Developer('Alia', 'Dhaka', 'React');
console.log(alia)
alia.provideFeedback()

const bipasha=new JobPlacement('bipasha', 'Kolkata', 'India')
console.log(bipasha)