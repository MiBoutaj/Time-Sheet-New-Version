import { Role } from "./Role.mode";

export class Employee {
    employee_id: number;
    username: string
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    startDate: Date;
    endDate: Date;
    photo: string;
    roles: Role[];
}