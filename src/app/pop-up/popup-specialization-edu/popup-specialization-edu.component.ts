import { Injector, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import {
  CodxFormComponent,
  DataRequest,
  DialogData,
  DialogRef,
  FormModel,
  NotificationsService,
  UIComponent,
} from 'codx-core';
import moment from 'moment';

@Component({
  selector: 'app-popup-specialization-edu',
  templateUrl: './popup-specialization-edu.component.html',
  styleUrls: ['./popup-specialization-edu.component.scss']
})
export class PopupSpecializationEduComponent extends UIComponent
implements OnInit  {
  dialog: DialogRef | undefined;
  EBasicSalaryObj: any;
  idField = 'RecID';
  actionType: string;
  disabledInput = false;
  isMultiCopy: boolean = false;
  headerText: 'Đăng ký nghĩ phép';


  //check where to open the form
  employeeObj: any | null;
  actionArray = ['add', 'edit', 'copy'];
  fromListView: boolean = false; //check where to open the form
  showEmpInfo: boolean = true;
  loaded: boolean = false;
  moment = moment;
  loadedAutoNum = false;
  originEmpID = '';
  originEmpBeforeSelectMulti: any;
  dateNow = moment().format('YYYY-MM-DD');
  // genderGrvSetup: any;
  //end
  constructor(
    injector: Injector,
    private cr: ChangeDetectorRef,
    private notify: NotificationsService,
    @Optional() dialog?: DialogRef,
    @Optional() data?: DialogData
  ) {
    super(injector);
    this.actionType = data?.data?.actionType;
    this.headerText = data?.data?.headerText;

    
  }

  override onInit(): void {
    
  }

  
}

