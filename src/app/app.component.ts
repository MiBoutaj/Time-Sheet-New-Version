import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TimeSheet';

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }




  data: any;
    
  constructor() {
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  borderColor: '#0000FF',
                  fill: true,
                  tension: .3
              },
              {
                  label: 'Second Dataset',
                  data: [28, 48, 40, 19, 86, 27, 90],
                  borderColor: '#FFFF33',
                  fill: true,
                  tension: .3
              },
              {
                label: 'tree Dataset',
                data: [28, 49, 41, 11, 83, 27, 80],
                borderColor: '#FF1800',
                fill: true,
                tension: .3
            }
          ]
      }
  }

}
