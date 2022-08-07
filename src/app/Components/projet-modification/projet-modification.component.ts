import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/Employee.model';
import { Project } from 'src/app/model/Project.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectServiceService } from 'src/app/services/project-service.service';
import { EditService, ToolbarService, PageService, DialogEditEventArgs, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/model/Task.model';
import { Browser } from '@syncfusion/ej2-base';
import { Dialog } from '@syncfusion/ej2-angular-popups';


@Component({
  selector: 'app-projet-modification',
  templateUrl: './projet-modification.component.html',
  styleUrls: ['./projet-modification.component.scss'],
  providers: [ToolbarService, EditService, PageService]
})
export class ProjetModificationComponent implements OnInit {



  emplyeeList: Employee[];
  id: string;
  project = new Project();
  employeeProject: Employee[];
  ids: number[];



  multifields: Object = { text: 'firstName ' + 'lastName', value: 'employee_id' };
  multiwatermark: string = 'Select employees';
  box: string = 'Box'

  taskList: Task[];
  taskData: Task;
  editSettings: Object;
  toolbar: string[];
  taskForm: FormGroup;
  pageSettings: Object;
  shipCityDistinctData: Object[];
  shipCountryDistinctData: Object[];
  submitClicked: boolean = false;




  constructor(private authService: AuthService,
    private router: ActivatedRoute,
    private projectService: ProjectServiceService,
    private changeDetect: ChangeDetectorRef,
    private taskService: TaskService) { }

  ngOnInit(): void {
    this.authService.findListEmplyeeByRole("MANAGER").subscribe(data => { this.emplyeeList = data });
    this.router.paramMap.subscribe(params => { this.id = params.get('id_Project'); console.log(params.get('id_Project')) });
    this.taskService.findAllTask().subscribe(data=> this.taskList = data);



    this.taskService.findAllTask().subscribe(data => this.taskList = data);
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbar = ['Add', 'Edit', 'Delete'];
    this.pageSettings = { pageCount: 5 };

  }

  createFormGroup(data: Task): FormGroup {
    return new FormGroup({ 
      TaskID: new FormControl(data.id_Task, Validators.required),
      TaskName: new FormControl(data.name, Validators.required),
      TaskStatus: new FormControl(data.status, Validators.required),
      TaskDescription: new FormControl(data.description, Validators.required),
      TaskDuration: new FormControl(data.duration, Validators.required)
    });
  }

  actionBegin(args: any): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.submitClicked = false;
      this.taskForm = this.createFormGroup(args.rowData);
    }
    if (args.requestType === 'save') {
      this.submitClicked = true;
      if (this.taskForm.valid) {
        args.data = this.taskForm.value;
      } else {
        args.cancel = true;
      }
    }
  }

  actionComplete(args: DialogEditEventArgs): void {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
      if (Browser.isDevice) {
        args.dialog.height = window.innerHeight - 90 + 'px';
        (<Dialog>args.dialog).dataBind();
      }
      // Set initail Focus
      if (args.requestType === 'beginEdit') {
        (args.form.elements.namedItem('TaskName') as HTMLInputElement).focus();
      } else if (args.requestType === 'add') {
        (args.form.elements.namedItem('TaskID') as HTMLInputElement).focus();
      }
    }
  }

  get TaskID(): AbstractControl  { return this.taskForm.get('TaskID'); }

    get TaskName(): AbstractControl { return this.taskForm.get('TaskName'); }

   // get OrderDate(): AbstractControl { return this.taskForm.get('OrderDate'); }






  view() {
    console.log(this.ids)
    this.addEmployeeListToProject(this.id, this.ids)
  }

  ngAfterViewInit() {
    this.changeDetect.detectChanges();
  }
  addEmployeeListToProject(id: string, ids: number[]) {
    return this.projectService.addEmployeeListToProject(id, ids);
  }





}
