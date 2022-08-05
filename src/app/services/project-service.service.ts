import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/Project.model';
import { ProjectDTO } from '../model/ProjectDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  
  private baseUrl = "http://localhost:8084"


  constructor(private http : HttpClient) { }

  addProjectDTo(pr : ProjectDTO):Observable<Project>{
    return this.http.post<ProjectDTO>(this.baseUrl+"/add",pr);
  }


  listProject():Observable<Project[]>{
    return this.http.get<Project[]>(this.baseUrl+"/findAll")
  }

  deleteProject(id : number){
    console.log(id)
  this.http.delete<number>(this.baseUrl+"/delete/"+id).subscribe(
    suc => {
      console.log("alllerr")

      
  },
  err => {
   console.log(err);

  }
  );


  }


  findProjectById(id: string):Observable<Project>{
    return this.http.get<Project>(this.baseUrl+"/findById/"+id)
  }



}
