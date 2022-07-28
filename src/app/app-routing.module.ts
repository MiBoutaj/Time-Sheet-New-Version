
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { CalenderComponent } from './Components/calender/calender.component';
import { TimesheetComponent } from './Components/timesheet/timesheet.component';
import { GestionUserComponent } from './Components/gestion-user/gestion-user.component';
import { GestionProjetComponent } from './Components/gestion-projet/gestion-projet.component';
import { ProjetTacheComponent } from './Components/projet-tache/projet-tache.component';
import { TacheComponent } from './Components/tache/tache.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';



const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  { path: 'gestion-projet', component: GestionProjetComponent },
  {path:'projet-tache',component:ProjetTacheComponent},
  { path: 'gestion-user', component: GestionUserComponent },
  {path:'timesheet',component:TimesheetComponent},
  {path:'calender',component:CalenderComponent},
  {path:'tache',component:TacheComponent},
  {path:'',redirectTo:'calender',pathMatch:'full'}
 

];


@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

