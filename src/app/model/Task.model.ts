import { Employee } from "./Employee.model";

export class Task {
    id_Task: number;
    nom: string;
    status: string;
    description: string;
    duration: number;
    verified : boolean;
    employeeTask: Employee;
}