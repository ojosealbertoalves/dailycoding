const input=document.getElementById("display")
let operation="";
let number1=0;


     function updateoperation(op){
        operation=op;
        number1=parseInt(input.value);
        input.value="0";
    }

function clear(){
    input.value="0";
}

function solve(){
    let number2=parseInt(input.value);
    let number3=0;

    switch(operation){
        case '+': number3=number1+number2; break;
        case '-': number3=number1-number2; break;
        case 'x': number3=number1*number2; break;
        case '/': number3=number1/number2; break; 
    }
  
    input.value=number3;
  }

function updatedisplay(number){

if(input.value==="0")
    input.value=number
else
    input.value=input.value+number

}