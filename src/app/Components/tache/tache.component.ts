
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { KanbanComponent, CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './data';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/model/Task.model';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {



  taskList: Task[];



  public cardSettings: CardSettingsModel = {
    
    contentField: 'description',
    headerField: 'id_Task',
 
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

    this.taskService.findAllTask().subscribe(data => { this.taskList = data; console.log(this.taskList) });
  }

}
