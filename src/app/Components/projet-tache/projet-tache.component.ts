import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/model/Project.model';
import { Task } from 'src/app/model/Task.model';
import { ProjectServiceService } from 'src/app/services/project-service.service';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-projet-tache',
  templateUrl: './projet-tache.component.html',
  styleUrls: ['./projet-tache.component.scss']
})
export class ProjetTacheComponent implements OnInit {

 
  taskLisk : Task[];
  project = new Project();
  id : string;
  data: any;
  chartOptions: any;
  
  constructor(
    private projectService: ProjectServiceService,
    private router : ActivatedRoute,
    private taskService : TaskService
    ) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe(params=>{ this.id = params.get('id_Project'); console.log( params.get('id_Project'))});

    this.projectService.findProjectById(this.id).subscribe(data=> this.project =data)
   

    this.taskService.findAllTaskProjectById(this.id).subscribe(da => this.taskLisk=da)
    console.log(this.taskLisk)
    console.log(this.project)
  


    this.data = {
      labels: ['To Do','Inprogress','Done'],
      datasets: [
          {
              data: [30, 50, 10],
              backgroundColor: [
                  "#FFCDD2",
                  "#FEEDAF",
                  "#B3E5FC"
              ],
              hoverBackgroundColor: [
                  "#C63737",
                  "#C63737",
                  "#3767c6"
              ]
          }
      ]
  };
  }

  calculateCustomerTotal(name) {
    let total = 0;

    if (this.taskLisk) {
      for (let task of this.taskLisk) {
        if (task.employeeTask.username === name) {
          total++;
        }
      }
    }

    return total;
  }

}
