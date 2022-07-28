import { Component, OnInit } from '@angular/core';
import { EventService } from './eventservice';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  events: any[];

  options: any;

  header: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
      this.eventService.getEvents().then(events => {
          this.events = events;
          this.options = {...this.options, ...{events: events}};
      });

      this.options = {
              initialDate : '2019-01-01',
              headerToolbar: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
              },
              editable: true,
              selectable:true,
              selectMirror: true,
              dayMaxEvents: true
      };
  }
}
