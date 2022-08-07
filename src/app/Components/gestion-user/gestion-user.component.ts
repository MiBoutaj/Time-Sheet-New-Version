import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { Employee } from 'src/app/model/Employee.model';


@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.scss'],
  providers: [MessageService]
})
export class GestionUserComponent implements OnInit {


  reactForm: FormGroup;
  activeIndex: number = 0;
  items: MenuItem[];
  employee = new Employee();

  selecetdFile: File;
  imagePreview: string;


  constructor(private messageService: MessageService) {
    this.reactForm = new FormGroup({
      'check': new FormControl('', [Validators.required]),
      'email_check': new FormControl('', [Validators.email]),
      'date_check': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required]),
      'state': new FormControl('', [Validators.required]),
      'Address': new FormControl(''),
    });
  }

  ngOnInit(): void {

    this.items = [{
      label: 'Personal',
      command: (event: any) => {
        this.activeIndex = 0;
        this.messageService.add({ severity: 'info', summary: 'First Step', detail: event.item.label });
      }
    },
    {
      label: 'Role',
      command: (event: any) => {
        this.activeIndex = 1;
        this.messageService.add({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
      }
    },
    {
      label: 'Login & Password',
      command: (event: any) => {
        this.activeIndex = 2;
        this.messageService.add({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
      }
    },
    {
      label: 'Confirmation',
      command: (event: any) => {
        this.activeIndex = 3;
        this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
      }
    }
    ];

    let formId: HTMLElement = <HTMLElement>document.getElementById('formId');
    document.getElementById('formId').addEventListener(
      'submit',
      (e: Event) => {
        e.preventDefault();
        if (this.reactForm.valid) {
          alert('Customer details added!');
          this.reactForm.reset();
        } else {
          // validating whole form
          Object.keys(this.reactForm.controls).forEach(field => {
            const control = this.reactForm.get(field);
            control.markAsTouched({ onlySelf: true });
          });
        }
      });
  }

  addSingle() {
    this.activeIndex = this.activeIndex + 1;
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  Next() {
    this.activeIndex = this.activeIndex + 1;
  }
  Back() {
    this.activeIndex = this.activeIndex - 1;
  }


  get check() { return this.reactForm.get('check'); }
  get email_check() { return this.reactForm.get('email_check'); }
  get date_check() { return this.reactForm.get('date_check'); }
  get city() { return this.reactForm.get('city'); }
  get state() { return this.reactForm.get('state'); }
  get Address() { return this.reactForm.get('Address'); }


  AddInfoEmployee() {
  }


  // onFileSelected(event) {
  //   this.selecetdFile = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imagePreview = reader.result;

  //   };
  //   reader.readAsDataURL(this.selecetdFile);
  // }
}




