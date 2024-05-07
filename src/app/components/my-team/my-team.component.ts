import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss'],
})
export class MyTeamComponent {
  selectedTabs = 0; // 0: quản lý trực tiếp ; 1:Quản lý gián tiếp; 3:Team của tôi;

  @Input() mainContent_Id = 'maincontent';
  @Output() handleReviewInfoEmployee = new EventEmitter();

  /* status : 1 - active, 2 - off, 3- busy */
  @Input() dataMyTeam = [
    {
      id: '1',
      name: 'Huỳnh Phước Hòa',
      job: 'Phát triển phần mềm',
      YOW: '15 năm 9 tháng 0 ngày',
      status: '1',
    },
    {
      id: '1',
      name: 'Huỳnh Phước Hòa',
      job: 'Phát triển phần mềm',
      YOW: '15 năm 9 tháng 0 ngày',
      status: '1',
    },
    {
      id: '1',
      name: 'Huỳnh Phước Hòa',
      job: 'Phát triển phần mềm',
      YOW: '15 năm 9 tháng 0 ngày',
      status: '1',
    },
    {
      id: '1',
      name: 'Huỳnh Phước Hòa',
      job: 'Phát triển phần mềm',
      YOW: '15 năm 9 tháng 0 ngày',
      status: '1',
    },
    {
      id: '1',
      name: 'Huỳnh Phước Hòa',
      job: 'Phát triển phần mềm',
      YOW: '15 năm 9 tháng 0 ngày',
      status: '1',
    },
    {
      id: '1',
      name: 'Huỳnh Phước Hòa',
      job: 'Phát triển phần mềm',
      YOW: '15 năm 9 tháng 0 ngày',
      status: '1',
    },
  ];

  

  getInfoEmployee(employeeID = '123458795872521'){
    console.log('clicked')
    this.handleReviewInfoEmployee.emit(employeeID);
  }
}
