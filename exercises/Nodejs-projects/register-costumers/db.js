const fs=require("fs");
const path = require("path");
/*const dbPath = "C:/Users/José Alberto/Desktop/Nova pasta/cursoJS/Nodejs-projects/register-costumers/db.json";
*/

let customers=[];

function addCustomer(name,address,cpf){

    const id=customers.length>0
    ? customers[customers.length-1].id+1
    : 1;

    customers.push({name,address,id,cpf});
    fs.writeFileSync("db.json",JSON.stringify(customers));

    return id;
}

function updateCustomer(id, newData) {
    // Converte id para número para garantir comparação correta
    id = typeof id === 'string' ? parseInt(id) : id;
    
    const customerIndex = customers.findIndex(customer => customer.id == id); // Usamos == para comparar
    if (customerIndex === -1) {
        console.log(`Cliente com ID ${id} não encontrado. IDs existentes:`, customers.map(c => c.id));
        return false;
    }

    const customer = customers[customerIndex];
    
   
    if (newData.name) customer.name = newData.name;
    if (newData.address) customer.address = newData.address;
    if (newData.cpf) customer.cpf = newData.cpf;

   
    customers[customerIndex] = customer;
    fs.writeFileSync("db.json", JSON.stringify(customers));
    
    return true;
}

function getCustomers(){
    const customersString=fs.readFileSync("db.json","utf-8");
    customers=JSON.parse(customersString);
    return customers;
}

module.exports={
    addCustomer,
    getCustomers,
    updateCustomer,
}