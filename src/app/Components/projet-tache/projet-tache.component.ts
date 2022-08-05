import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/model/Project.model';
import { ProjectServiceService } from 'src/app/services/project-service.service';
import { Customer } from './customer';
import { CustomerService } from './customerservice';


@Component({
  selector: 'app-projet-tache',
  templateUrl: './projet-tache.component.html',
  styleUrls: ['./projet-tache.component.scss'],
  providers: [CustomerService]
})
export class ProjetTacheComponent implements OnInit {

  customers: Customer[];
  project = new Project();
  id : string;
  data: any;
  chartOptions: any;
  
  constructor(private customerService: CustomerService,
    private projectService: ProjectServiceService,
    private router : ActivatedRoute) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe(params=>{ this.id = params.get('id_Project'); console.log( params.get('id_Project'))});

    this.projectService.findProjectById(this.id).subscribe(data=> this.project =data)
  

    this.customerService.getCustomersMedium().then(data => {
      this.customers = data;
    });

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
