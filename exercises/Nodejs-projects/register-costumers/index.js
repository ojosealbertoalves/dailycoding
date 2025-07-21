const db = require("./db");
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

function validateId(id) {
    return id>0;
}

function validateName(name) {
    if (!name) return false;
    if (name.trim().indexOf(" ") === -1) return false;
    return true;
}

function validateAddress(address) {
    if (!address) return false;
    if (address.length < 10) return false;
    return true;
}

function validateCPF(cpf) {
    // Implemente uma validação real de CPF aqui
    if (!cpf) return false;
    if (cpf.length !== 11) return false; // CPF deve ter 11 dígitos
    return true;
}

async function getAnswer(question, errorMessage, validationFunction) {
    let answer = "";
    do {
        answer = await rl.question(question);
        if (!validationFunction(answer)) console.log(errorMessage);
    } while (!validationFunction(answer));
    return answer;
}

async function listCustomers() {
    console.clear();
    const customers = db.getCustomers(); // Corrigido o nome da função (de getCostumers para getCustomers)

    if (customers.length === 0) {
        console.log("No customers registered yet.");
    } else {
        console.log(customers);
    }
    await rl.question("Press Enter to continue...");
    printMenu();
}

async function startRegistration() {
    console.clear();
    const name = await getAnswer("What is the customer name? ", "Invalid name, try again.", validateId);
    const address = await getAnswer("What is the address? ", "Invalid address, try again.", validateAddress);
    const cpf = await getAnswer("What is your CPF? ", "Invalid CPF", validateCPF);
    
    
    db.addCustomer({ name, address, cpf });
    
    console.log("Registration successful");
    await rl.question("Press Enter to continue...");
    printMenu();
}

async function startUpdate() {
    console.clear();
    const id = await getAnswer("What is the customer id? ", "Invalid ID, try again.", validateId);
    const name = await getAnswer("What is the customer name? ", "Invalid name, try again.", validateName);
    const address = await getAnswer("What is the address? ", "Invalid address, try again.", validateAddress);
    const cpf = await getAnswer("What is your CPF? ", "Invalid CPF", validateCPF);

    const result=db.updateCustomer(id,name,address,cpf);

    if(result)
        console.log("Customer updated");
    else
        console.log("Customer not finded");
    
    
    db.addCustomer({ name, address, cpf });
    
    console.log("Registration successful");
    await rl.question("Press Enter to continue...");
    printMenu();
}


async function printMenu() {
    console.clear();
    console.log("Menu:");
    console.log("1-See customers registered");
    console.log("2-Register new customer");
    console.log("3-Edit costumer");
    console.log("5-Finish");

    const answer = await rl.question('What option do you want? ');
    switch (answer) {
        case "2":
            await startRegistration();
            break;
        case "1":
            await listCustomers();
            break;
        case "3": 
              await startUpdate();
              break;
        case "5":
            console.clear()
            process.exit(0);
        default:
            console.log("Invalid option, try again.");
            await rl.question("Press Enter to continue...");
            printMenu();
    }
}

printMenu();
db.getCustomers();

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