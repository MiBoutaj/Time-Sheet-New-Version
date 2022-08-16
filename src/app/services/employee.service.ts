import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employee.model';
import { Event } from '../model/Event.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8084/users/employee"

  constructor(private http: HttpClient, private authService : AuthService) { }


  findAllEmployeeDev():Observable<Employee[]>{  
    return this.http.get<Employee[]>(this.baseUrl+"/findAll/Dev")
  }


  findAllEventEmployee():Observable<Event[]>{
    console.log(this.authService.employee.id)
    return this.http.get<Event[]>(this.baseUrl + "/findAllEvent/" + this.authService.employee.id)
  }
}
