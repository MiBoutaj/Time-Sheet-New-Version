import { Role } from "./Role.mode";

export class Employee {
    id: number;
    username: string
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    startDate: Date;
    endDate: Date;
    photo: string;
    roles: string[];
}