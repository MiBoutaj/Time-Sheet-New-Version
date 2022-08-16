import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/model/Event.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-modification',
  templateUrl: './event-modification.component.html',
  styleUrls: ['./event-modification.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class EventModificationComponent implements OnInit {



  EventList: Event[];
  event : Event;
  public waterMark: string = 'Select start date';


  eventDialog: boolean;
  reactForm: any;
  submitted: boolean;
  constructor(private employeeService : EmployeeService,
     private eventService : EventService,
     private messageService: MessageService,
     private confirmationService: ConfirmationService) {


    this.reactForm = new FormGroup({
      'check': new FormControl('', [Validators.required]),
      'id_event': new FormControl('', [Validators.required]),
      'nom': new FormControl('', [Validators.required]),
      'startDate': new FormControl('', [Validators.required]),
      'endDate': new FormControl('', [Validators.required])

    });




  }

  ngOnInit(): void {

    this.employeeService.findAllEventEmployee().subscribe(data => this.EventList =data);
  }


  editProduct(event: Event) {

  }

  saveEvent() {
    this.submitted = true;

    if (this.event.Subject.trim()) {
      if (this.event.Id) {
        // this.products[this.findIndexById(this.product.id)] = this.product;
        // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Task Updated', life: 3000});
      }
      else {

        
        this.eventService.addEvent(this.event).subscribe(
          suc => {
        
            console.log("jjjj")

            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Event Created', life: 3000 });
            this.event = new Event();
            this.ngOnInit();
          },
          err => {

            this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Erreur' });
          }
        )
      }

      this.EventList = [...this.EventList];
      this.eventDialog = false;
      this.event = new Event();
      this.ngOnInit();
    }


  }



  deleteProduct(event: Event) {

  }

  openNew() {

    this.event = new Event();
    this.submitted = false;
    this.eventDialog = true;

  }
  hideDialog(){

  }










}
