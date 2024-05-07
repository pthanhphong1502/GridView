
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Thickness } from 'ngx-basic-primitives';

@Component({
  selector: 'hr-dashboard-register-aprrove',
  templateUrl: './dashboard-register-approve.component.html',
  styleUrls: ['./dashboard-register-approve.component.scss']
})
export class DashboardRegisterApproveComponent {
  @Output() handleRegisterApprove = new EventEmitter();
  @Output() handleReviewRegisterApprove = new EventEmitter();
  @Output() handleWaitingRegisterApprove = new EventEmitter();

  public primaryXAxis?: Object;
  public chartData?: Object[];
  public title?: string;
  primaryYAxis: any;
  public chartArea: Object = {
    border: {
      width: 0
    },

  }
  columnData: Object[]= [
    { date: '23/02', In: 20, Out: 10 },
    { date: '24/02', In: 5, Out: 20 },
    { date: '25/02', In: 10, Out: 15 },
    { date: '26/02', In: 15, Out: 15 },
    { date: '27/02', In: 10, Out: 14 },
    { date: '28/02', In: 5, Out: 8 },
    { date: '29/02', In: 10, Out: 7 },
  ];

    // Fake data card đăng ký xét duyệt
    lstCards = [{
      id: 1,
      color: '#EF6023' ,
      bgColor: '#FFF7CC',
      icon: '',
    },
    {
      id: 2,
      color: '#08AD36' ,
      bgColor: '#E8FFF2',
      icon: '',
    },
    {
      id: 3,
      color: '#FF00A8' ,
      bgColor: '#FFE2E6',
      icon: '',
    },
    {
      id: 4,
      color: '#2F80ED' ,
      bgColor: '#EDF5FF',
      icon: '',
    },
    {
      id: 5,
      color: '#9B51E0' ,
      bgColor: '#F3E7FF',
      icon: '',
    },
    {
      id: 6,
      color: '#08AD36' ,
      bgColor: '#E8FFF2',
      icon: '',
    },
    {
      id: 7,
      color: '#FFA800' ,
      bgColor: '#FFF7E8',
      icon: '',
    },
    {
      id: 8,
      color: '#08AD36' ,
      bgColor: '#CEFFDC',
      icon: '',
    },
    {
      id: 9 ,
      color: '#FFA800' ,
      bgColor: '#FFF7E8',
      icon: '',
    },
    {
      id: 10,
      color: '#08AD36' ,
      bgColor: '#CEFFDC',
      icon: '',
    },
    {
      id: 11,
      color: '#FFA800' ,
      bgColor: '#FFF7E8',
      icon: '',
    },
    {
      id: 12,
      color: '#08AD36' ,
      bgColor: '#CEFFDC',
      icon: '',
    },
  
  ]
  ngOnInit(): void {
    console.log(this.handleRegisterApprove)
    this.chartData = this.columnData;
    this.primaryXAxis = {
       valueType: 'Category',
       title: '',
       majorGridLines: { width: 0 },
       majorTickLines: { width: 0 },
       lineStyle: {width: 0}
    };
    this.primaryYAxis = {
        minimum: 0, maximum: 20,
        interval: 5, title: '',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: {width: 0}
    };
  }

  open(){
    this.handleRegisterApprove.emit(null)
    //this.dialog.onOpenDialog(event);
  }

  open2(){
    // this.handleRegisterApprove.emit(null)

    this.handleReviewRegisterApprove.emit(null)
  }

  open3(){
    this.handleWaitingRegisterApprove.emit(null)

    // this.handleWaitingRegisterApprove.emit(null)
  }

}

