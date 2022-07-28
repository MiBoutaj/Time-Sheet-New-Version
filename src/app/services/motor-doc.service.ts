import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MotorDoc } from '../model/MotorDoc.model';

@Injectable({
  providedIn: 'root'
})
export class MotorDocService {

  constructor(private http :HttpClient) { }
  apiURL: string = 'http://localhost:8080/api/v1/motor/addMotor';

  motor:MotorDoc;

  addMotorDocument(motor:MotorDoc):Observable<MotorDoc>{
    return this.http.post<MotorDoc>(this.apiURL,motor);
  }

}
