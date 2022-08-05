import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet-modification',
  templateUrl: './projet-modification.component.html',
  styleUrls: ['./projet-modification.component.css']
})
export class ProjetModificationComponent implements OnInit {


  taches : Task[];

  constructor() { }

  ngOnInit(): void {
  }

}
