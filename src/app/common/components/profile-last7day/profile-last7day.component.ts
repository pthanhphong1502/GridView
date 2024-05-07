import { Component, OnInit } from '@angular/core';
import { ChartTheme, ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'lib-profile-last7day',
  templateUrl: './profile-last7day.component.html',
  styleUrls: ['./profile-last7day.component.scss']
})
export class ProfileLast7dayComponent implements OnInit {
  public primaryXAxis?: Object;
  public chartData?: Object[];
  public title?: string;
  primaryYAxis: any;
  public chartArea: Object = {
    border: {
      width: 0
    },

  }

  // public onTooltipRender(args: any): void {
  //   const pointData = args.point;
  //   if (pointData) {
  //     const inValue = pointData.series.data[pointData.series.index].In;
  //     const outValue = pointData.series.data[pointData.series.index].Out;
  //     const headerHTML = `<b>Ngày: ${pointData.x}</b>`;
  //     const contentHTML = `<div>Vào: ${inValue} giờ</div><div>Ra: ${outValue} giờ</div>`;
  //     args.header = headerHTML;
  //     args.content = [contentHTML];
  //   }
  // }

  // public tooltip: Object = {
  //   enable: true,
  //   header: `<b>Giờ làm việc</b>`,
  //   shared: true,
  //   enableAnimation: true,
  //   format: (value: any, point: any) => {
  //     const headerHTML = `<div style="font-weight: bold;">${value}</div>`;
  //     const contentHTML = point.map((data: any) => {
  //       const inValue = data.series.data[data.series.index].In;
  //       const outValue = data.series.data[data.series.index].Out;
  //       return `<div>Vào: ${inValue} giờ</div><div>Ra: ${outValue} giờ</div>`;
  //     });
  //     return [headerHTML, ...contentHTML];
  //   },
  //   render: this.onTooltipRender.bind(this)
  // tooltipSettings = {
  //   enable: true,
  //   header: (args: any) => {
  //     const dataIndex = args.pointIndex;
  //     const dataItem = args.series.data[dataIndex];
  //     const workingHours = dataItem.In - dataItem.Out;
  //     return `${workingHours} giờ làm việc`;
  //   },
  //   template: '<div>Ngày: #point.x#</div><div>Giờ vào làm: #point.In# giờ</div><div>Giờ về: #point.Out# giờ</div>'
  // };
  

tooltipSettings={
  enable: true,
  // header: (args: any) => {
  //       const dataIndex = args.pointIndex;
  //       const dataItem = args.series.data[dataIndex];
  //       const workingHours = dataItem.In - dataItem.Out;
  //       return `${workingHours} giờ làm việc`;
  //     },
  header: `${'12'} giờ kàm việc`
  
}
  
  
  
  public legend: Object = {
    visible: true,
    enableHighlight: true,
  };

  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
    );
    // if (selectedTheme === 'highcontrast') {
    //   args.chart.series[0].marker.dataLabel.font.color = '#000000';
    //   args.chart.series[1].marker.dataLabel.font.color = '#000000';
    //   args.chart.series[2].marker.dataLabel.font.color = '#000000';
    // }
  }

  columnData: Object[] = [
    { date: '23/02', In: 20, Out: 10 },
    { date: '24/02', In: 5, Out: 20 },
    { date: '25/02', In: 10, Out: 15 },
    { date: '26/02', In: 15, Out: 15 },
    { date: '27/02', In: 10, Out: 14 },
    { date: '28/02', In: 5, Out: 8 },
    { date: '29/02', In: 10, Out: 7 },
  ];
  ngOnInit(): void {
    this.chartData = this.columnData;
    this.primaryXAxis = {
      valueType: 'Category',
      title: '',
      majorGridLines: { width: 0 },
      majorTickLines: { width: 0 },
      lineStyle: { width: 0 }
    };
    this.primaryYAxis = {
      minimum: 0, maximum: 20,
      interval: 5, title: '',
      majorGridLines: { width: 0 },
      majorTickLines: { width: 0 },
      lineStyle: { width: 0 }
    };
  }

  public onTooltipRender(args: any): void {
    const pointData = args.point;
    if (pointData) {
      const inValue = pointData.series.data[pointData.index].In;
      const outValue = pointData.series.data[pointData.index].Out;
      args.header = `<b>Ngày: ${pointData.x}</b>`;
      args.content = [`Vào: ${inValue} giờ`, `Ra: ${outValue} giờ`];
    }
  }
}
