import { Component, TemplateRef, ViewChild } from '@angular/core';
import { UIComponent } from 'codx-core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent extends UIComponent {

  override onInit(): void {
    this.initEmpPassport();
    this.initDataFakes();
  }
  ePassport!: any[];

  @ViewChild('templatePassportCol1', { static: true })
  templatePassportCol1: TemplateRef<any> | undefined;
  @ViewChild('templatePassportCol2', { static: true })
  templatePassportCol2: TemplateRef<any> | undefined;
  @ViewChild('templatePassportCol3', { static: true })
  templatePassportCol3: TemplateRef<any> | undefined;
  @ViewChild('templatePassportCol4', { static: true })
  templatePassportCol4: TemplateRef<any> | undefined;
  @ViewChild('templatePassportCol5', { static: true })
  templatePassportCol5: TemplateRef<any> | undefined;
  @ViewChild('templatePassportCol6', { static: true })
  templatePassportCol6: TemplateRef<any> | undefined;
  @ViewChild('templatePassportCol7', { static: true })
  templatePassportCol7: TemplateRef<any> | undefined;

  initEmpPassport() {
    if (!this.ePassport) {
      this.ePassport = [
        {
          headerText: 'Số hộ chiếu',
          template: this.templatePassportCol1,
          width: '15%',
        },
        {
          headerText: 'Quốc gia đến',
          template: this.templatePassportCol2,
          width: '15%',
        },
        {
          headerText: 'Từ ngày',
          template: this.templatePassportCol3,
          width: '15%',
        },
        {
          headerText: 'Đến ngày',
          template: this.templatePassportCol4,
          width: '15%',
        },
        {
          headerText: 'Số ngày',
          template: this.templatePassportCol5,
          width: '15%',
        },
        {
          headerText: 'Ghi chú',
          template: this.templatePassportCol6,
          width: '15%',
        },
        {
          headerText: '',
          template: this.templatePassportCol7,
          width: '10%',
        }
      ];
    }
  };



  lstDataFake: any;
  initDataFakes(): void {
    this.lstDataFake = [
      {
         code: '#B5028441',
         location: 'TP Hồ Chí Minh',
         typePassport: 'PASSPORT',
         dateRange: '01/04/2024',
         dateExpire: '01/12/2024',
         note: 'Đi công tác lấy yêu cầu nghiệp vụ',
         detail: [
          {
              nationTo: 'Australia',
              fromDate: '01/04/2024',
              toDate: '05/04/2024',
              numberDay: '10',
              noteChildren: 'Đi công tác'
          },
          {
            nationTo: 'Afghanistan',
            fromDate: '01/04/2024',
            toDate: '05/04/2024',
            numberDay: '10',
            noteChildren: 'Đi công tác'
          },
          {
            nationTo: 'Colombia',
            fromDate: '01/04/2024',
            toDate: '05/04/2024',
            numberDay: '10',
            noteChildren: 'Đi công tác'
          },
         ]
      }
    ]
  }
}
