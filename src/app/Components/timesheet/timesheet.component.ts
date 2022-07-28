import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';
import { FormControl, FormGroup,Validators, FormsModule, AbstractControl } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
  providers : [ProductService,MessageService]
})
export class TimesheetComponent implements OnInit {
  products: Product[] | any;
  reactForm: FormGroup;

  constructor(private productService: ProductService , private http : HttpClient , private messageService: MessageService) { 
    this.reactForm = new FormGroup({
      'check': new FormControl('', [Validators.required]),
      'email_check': new FormControl('', [Validators.email]),
      'date_check': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required]),
      'state': new FormControl('', [Validators.required]),
      'Address':new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => this.products = data);

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

  get check() { return this.reactForm.get('check'); }
  get email_check() { return this.reactForm.get('email_check'); }
  get date_check() { return this.reactForm.get('date_check'); }
  get city() { return this.reactForm.get('city'); }
  get state() { return this.reactForm.get('state'); }
  get Address() { return this.reactForm.get('Address'); }


  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'TimeSheet is added'});
}

}
