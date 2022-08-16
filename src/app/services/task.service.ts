import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/Task.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8084/users/task"

  constructor(private http: HttpClient, private authService: AuthService) { }

  findAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl + "/fidAllTaskByEmployee/" + this.authService.employee.id);
  }

  findAllTaskProjectById(id: string): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl + "/findAllTaskByProjectId/" + id);
  }

  addTaskToEmployee(id: string, ide: number, task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl + "/addTaskToProject/" + id + "/" + ide, task);
  }

  deleteTaskById(id : number){
    console.log(this.baseUrl +"/deleteTaskById/" + id)
    return this.http.delete(this.baseUrl +"/deleteTaskById/" + id).subscribe();
  }



  editTask(id : number ,task : Task):Observable<Task>{
    return this.http.post<Task>(this.baseUrl + "/editTask/"+id,task)
  }



}
