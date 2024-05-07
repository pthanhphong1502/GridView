import { Component, TemplateRef, ViewChild } from '@angular/core';
import { UIComponent, ViewModel, ViewType } from 'codx-core';

@Component({
  selector: 'app-dialog-leave-approvaldetails',
  templateUrl: './dialog-leave-approvaldetails.component.html',
  styleUrls: ['./dialog-leave-approvaldetails.component.scss'],
})
export class DialogLeaveApprovaldetailsComponent extends UIComponent {
  //#region Constructor
  // @ViewChild('itemTemplate') itemTemplate?: TemplateRef<any>;
  // @ViewChild('templateDetailLeft') templateDetailLeft?: TemplateRef<any>;
  // @ViewChild('templateDetailRight') templateDetailRight?: TemplateRef<any>;

  // views: Array<ViewModel> = [];

  override onInit(): void {}

  ngAfterViewInit(): void {}
}
