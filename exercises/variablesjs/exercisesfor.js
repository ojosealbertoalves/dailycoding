const arraytest=['test','test2','test3','test4','test5']

for(let i=0;i<arraytest.length;i++){
console.log(arraytest[i])
}



function showarray(array){
for(let i=0;i<arraytest.length;i++){
console.log(`Indice ${i}: Elemento ${array[i]}`);
}

}

function showarray2(array){
    let i = 0;
    for (const elemento of array) {
        console.log(`Índice ${i}: Elemento ${elemento}`);
        i++;
    }
}

showarray2(arraytest)

const numbers=[1,2,3,4]

function sumarray(array){
    let sum=0
    for(let i=0;i<array.length;i++){
     sum=sum+array[i]
    }
console.log(sum)
}

sumarray(numbers)