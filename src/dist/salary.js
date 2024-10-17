"use strict";
class DepartmentSalaryManager {
    constructor() {
        this.employees = [];
    }
    addEmployee(name, department, salary) {
        this.employees.push({ name, department, salary });
    }
    getTotalSalaryByDepartment(department) {
        return this.employees
            .filter(emp => emp.department === department)
            .reduce((total, emp) => total + emp.salary, 0);
    }
}
const salaryManager = new DepartmentSalaryManager();
salaryManager.addEmployee("Basith", "Engineering", 80000);
salaryManager.addEmployee("Karthik", "HR Ops", 90000);
console.log(salaryManager.getTotalSalaryByDepartment("HR Ops"));
