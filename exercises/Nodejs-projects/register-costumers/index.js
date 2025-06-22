const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

async function listCustomers(){
  console.log(customers);
   await rl.question("Press Enter to continue...")
   printMenu();
}

async function startRegistration(){
    const name=await rl.question("What is the customer name?")
    const address=await rl.question("What is the customer address?")
    const id=customers.length>0? customers[customers.length-1].id+1:1;

}

async function printMenu() {
console.clear();
console.log("Menu:");
console.log("1-Register new costumer");
console.log("2-See customers registered");
console.log("3-Finish")

const answer=await rl.question('What option do you want?');
switch(answer){
    case "1":startRegistration();break;
    case "2": listCustomers(); break;
    case "3": process.exit(0);
    default: console.log("Wrong question, try again.");
}

  
    await rl.question("Press Enter to continue...")
   
       printMenu();

  }

printMenu();

/*
*CRUD
*Create
*Read/Retrieve
*Update
*Delete
*/

/*const customers=[];

customers.push({
    id:1,
    name:"Luiz",
    address:"Gravataí/RS"
})

customers[1]={id: 2, name: "Teste", address:"Goiania/GO"}

const newCustomer={};
newCustomer.id=3;
newCustomer.name="Teste2";
newCustomer.address="Rua X";
customers.push(newCustomer);

console.log(customers);
*/