"use strict";
class EmployeeManager {
    constructor() {
        this.employees = [];
        this.idCounter = 1;
    }
    addEmployee(name, email, password) {
        const newEmployee = {
            id: this.idCounter++,
            name,
            email,
            password,
        };
        this.employees.push(newEmployee);
        return newEmployee;
    }
    getEmployees() {
        return this.employees;
    }
}
const empManager = new EmployeeManager();
empManager.addEmployee("Basith", "basith@example.com", "123");
console.log(empManager.getEmployees());
