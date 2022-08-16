import { Component, OnInit } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';

import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService } from '@syncfusion/ej2-angular-schedule';
import { Event } from 'src/app/model/Event.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {



  options: any;

  header: any;

  constructor( private employeeServcie :  EmployeeService) { }
  ngOnInit(): void {
    

  


  }
// public eventData: EventSettingsModel = { dataSource: extend([], this.events , null, true) as Record<string, any>[] };

 public eventData: EventSettingsModel = {
 
  dataSource: this.methodeFindAllEvent()

}


methodeFindAllEvent(){
  let events : object[];

 this.employeeServcie.findAllEventEmployee().subscribe(data => {
      events = data;
      console.log(events)
    })
    return events;
}






}

