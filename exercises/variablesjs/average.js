const students=['Test1','Test2','Test3']
const averages=[10,8,7.5,9]

const list=[students,averages]

function showNameandnote(student){
    if(list[0].includes(student)){
     const index=list[0].indexOf(student)
     const averageStudent=list[1][index];
     console.log(`${student} has the grade ${averageStudent}`)
    } else{
        console.log("We Dont have this student")
    }
}

showNameandnote('Test1')
showNameandnote('Joao')

let i=5

let valorA=i++;
console.log(valorA)
console.log(i)