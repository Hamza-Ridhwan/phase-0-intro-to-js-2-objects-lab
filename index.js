const employee = {
    name: "Hamza",
    streetAdress: "KilimaniRd"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return{...employee, [key]: value};
}
const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Ali");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
const newEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "rhaptaRd")

console.log(newEmployee2);
console.log(employee);
console.log(newEmployee);

function deleteFromEmployeeByKey(employee, key) {
    const { [key]: omitted, ...newEmployee } = employee; // Use destructuring to omit the key
    return newEmployee; // Return the new object without the specified key
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}




