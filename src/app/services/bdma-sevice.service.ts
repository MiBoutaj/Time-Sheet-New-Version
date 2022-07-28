import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BdmaPdf } from '../model/BdmaPdf.model';

@Injectable({
  providedIn: 'root'
})
export class BdmaSeviceService {



private baseUrl="http://localhost:8080/api/v1/motor/findAllDocument";
private baseUrl1="http://localhost:8081/file/downloadFile";
private baseUrl2="http://localhost:8081/file/UploadFile";
private baseUrl3="http://localhost:8081/file/Nombre";
  constructor(private httpClient:HttpClient) { }


getBdmaPdfList():Observable<BdmaPdf[]>{
  return this.httpClient.get<BdmaPdf[]>(`${this.baseUrl}`);
}

downloadFile(id:number)
{
  return this.httpClient.get(`${this.baseUrl1}/${id}`);
}


UploadFile(document :Document){
  return this.httpClient.post(this.baseUrl2,document);
}

GetValue(Site : String): any{
  return this.httpClient.get(`${this.baseUrl3}/${Site}`)

}






}
