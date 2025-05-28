function draw(){
    let qnumber=parseInt(document.getElementById("qnumber").value);
    let minnumber=parseInt(document.getElementById("minnumber").value);
    let maxnumber=parseInt(document.getElementById("maxnumber").value);
    const randoms=[]; 
    let number;
    const resultDiv=document.getElementById("result")  

     if (isNaN(qnumber) || isNaN(minnumber) || isNaN(maxnumber)) {
        resultDiv.textContent = "Please fill all fields with valid numbers!";
        return;
    } 



    for(let i=0;i<qnumber;i++){
     number=randomnumber(minnumber,maxnumber);
     randoms.push(number)
    }


function randomnumber(min,max){

    return Math.floor(Math.random()*(max-min+1))+min;

}

 resultDiv.textContent = `Drawn numbers: ${randoms.join(', ')}`;
}

function reset() {
    
    document.getElementById("qnumber").value = "";
    document.getElementById("minnumber").value = "";
    document.getElementById("maxnumber").value = "";
    
    
    document.getElementById("result").textContent = "";
}