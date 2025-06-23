const customers = [];

// Versão 1: Recebendo parâmetros separados
function addCustomer(name, address, cpf) {
    const id = customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;
    customers.push({ name, address, cpf, id });
    return id;
}


function addCustomer(customerData) {
    const id = customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;
    customers.push({ ...customerData, id });
    return id;
}

function getCustomers() {
    return customers;
}

module.exports = {
    addCustomer,
    getCustomers
};