
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './data';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {

  @ViewChild('kanbanObj') kanbanObj: KanbanComponent;
  public kanbanData: Object[] = extend([], kanbanData, null, true) as Object[];
  public cardSettings: CardSettingsModel = {
      contentField: 'Summary',
      headerField: 'Id',
      tagsField: 'Tags',
      grabberField: 'Color',
      footerCssField: 'ClassName'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
