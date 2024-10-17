interface Employee {
    id: number;
    name: string;
    email: string;
    password: string;
}

class EmployeeManager {
    private employees: Employee[] = [];
    private idCounter = 1;

    addEmployee(name: string, email: string, password: string): Employee {
        const newEmployee: Employee = {
            id: this.idCounter++,
            name,
            email,
            password,
        };
        this.employees.push(newEmployee);
        return newEmployee;
    }

    getEmployees(): Employee[] {
        return this.employees;
    }
}


const empManager = new EmployeeManager();
empManager.addEmployee("Basith", "basith@example.com", "123");
console.log(empManager.getEmployees());
