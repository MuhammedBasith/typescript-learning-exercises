interface Employees {
    name: string;
    department: string;
    salary: number;
}

class DepartmentSalaryManager {
    private employees: Employees[] = [];

    addEmployee(name: string, department: string, salary: number): void {
        this.employees.push({ name, department, salary });
    }

    getTotalSalaryByDepartment(department: string): number {
        return this.employees
            .filter(emp => emp.department === department)
            .reduce((total, emp) => total + emp.salary, 0);
    }
}


const salaryManager = new DepartmentSalaryManager();
salaryManager.addEmployee("Basith", "Engineering", 80000);
salaryManager.addEmployee("Karthik", "HR Ops", 90000);

console.log(salaryManager.getTotalSalaryByDepartment("HR Ops"));
