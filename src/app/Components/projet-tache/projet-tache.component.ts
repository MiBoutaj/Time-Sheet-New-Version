import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customerservice';


@Component({
  selector: 'app-projet-tache',
  templateUrl: './projet-tache.component.html',
  styleUrls: ['./projet-tache.component.scss'],
  providers :[CustomerService ]
})
export class ProjetTacheComponent implements OnInit {

  customers: Customer[];

  constructor( private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomersMedium().then(data => {
      this.customers = data;
  });
  }

  calculateCustomerTotal(name) {
    let total = 0;

    if (this.customers) {
        for (let customer of this.customers) {
            if (customer.representative.name === name) {
                total++;
            }
        }
    }

    return total;
}

}
