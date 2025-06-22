const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

async function printMenu() {
console.clear();
console.log("Menu:");
console.log("1-Register new costumer");
console.log("2-See customers registered");
console.log("3-Finish")

const answer=await rl.question('What option do you want?');
    console.log(answer);
    await rl.question("Press Enter to continue...")
    setTimeout(printMenu,3000);
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