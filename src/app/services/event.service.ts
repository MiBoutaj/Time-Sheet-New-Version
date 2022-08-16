import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/Event.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  private baseUrl = "http://localhost:8084/users/event"

  constructor(private http : HttpClient,private authService : AuthService) { }

  addEvent(event : Event):Observable<Event>{
    return this.http.post<Event>(this.baseUrl +"/addEventByManager/"+this.authService.employee.id,event);
  }



}
