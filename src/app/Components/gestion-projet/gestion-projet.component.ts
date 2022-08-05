import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, AbstractControl } from '@angular/forms';
import { ProjectDTO } from 'src/app/model/ProjectDTO.model';
import { ProjectServiceService } from 'src/app/services/project-service.service';
import { Message, MessageService } from 'primeng/api';
import { Project } from 'src/app/model/Project.model';
import { ConfirmationService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.component.html',
  styleUrls: ['./gestion-projet.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class GestionProjetComponent implements OnInit {

  reactForm: FormGroup;
  projecttDialog: boolean;
  submitted: boolean;
  msgs: Message[] = [];
  projectDTO = new ProjectDTO();
  projectList: Project[];


  constructor(private messageService: MessageService,
    private projectService: ProjectServiceService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig) {

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

    this.primengConfig.ripple = true;
    this.projectService.listProject().subscribe(data => this.projectList = data);

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

  openNew() {
    this.submitted = false;
    this.projecttDialog = true;
  }
  Close() {
    this.submitted = true;
    this.projecttDialog = false;
  }
  addProject() {

    this.projectService.addProjectDTo(this.projectDTO).subscribe(
      suc => {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Project is added' });
        this.Close();
        this.projectDTO = new ProjectDTO();
        this.ngOnInit();
      },
      err => {
        this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Erreur' });
      }
    );
  }



  confirm(id: number) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want delete project?',
        accept: () => {
          this.projectService.deleteProject(id);
          this.ngOnInit();
          this.msgs = [{ severity:'info', summary:'Confirmed', detail:'Project deleted'}];
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
}

}
