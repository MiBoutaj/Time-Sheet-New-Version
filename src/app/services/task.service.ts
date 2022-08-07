import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/Task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8084"

  constructor(private http: HttpClient) { }

  findAllTask():Observable<Task[]>{
    return this.http.get<Task[]>(this.baseUrl+"/findAllTask");
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.baseUrl+"/addTaskToEmployee",task);
  }
}
