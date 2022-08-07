import { ManagerProject } from "./ManagerProject.model";

export class Project {

    id_Project: number;
    name: string;
    description: string;
    duration: number;
    client: string;
    managerProject: ManagerProject;

}