const student={
    name:'kolim uddin',
    age:16,
    class:10,
    marks:{
        math:79,
        phyisics:83,
        chemistry:49,
    }

}

const marks=student.marks.math;
const chemistry=student['marks']['chemistry'];
const subject=['math'];
const subjectMarks=student.marks[subject];
console.log(chemistry)



const array={123:'valo', 

address:{name:'kalo',
    street:'5th',
     113:'code'   },
}

const co=array['address']['113'];
console.log(co)