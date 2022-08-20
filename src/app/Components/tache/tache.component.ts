
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { KanbanComponent, CardSettingsModel, DataSourceChangedEventArgs, DataStateChangeEventArgs } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './data';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/model/Task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {



  taskList: Task[];
  public data: Observable<DataStateChangeEventArgs>;
  public state: DataStateChangeEventArgs;



  public cardSettings: CardSettingsModel = {

    contentField: 'description',
    headerField: 'id_Task',

  };

  constructor(private service: TaskService) { }

  ngOnInit(): void {
    let state = { skip: 0, take: 10 };
    this.service.findAllTask().subscribe(data => { this.taskList = data; console.log(this.taskList) });
  }





  public dataSourceChanged(state: DataSourceChangedEventArgs): void {
    if (state.requestType === 'cardCreated') {
      state.endEdit();
    } else if (state.requestType === 'cardChanged') {
      this.service.updateCard(state).subscribe(() => {
        state.endEdit();
        this.dataStateChange(this.state);
       
      });
      state.endEdit();
    } else if (state.requestType === 'cardRemoved') {
      state.endEdit();
    }
    this.dataStateChange(this.state);state.endEdit();

  }


  public dataStateChange(state: DataStateChangeEventArgs): void {
    state.action.cancel;
    this.ngOnInit();
    this.service.findAllTask().subscribe(data => this.taskList = data);
  }










}
