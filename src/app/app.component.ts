import { Component, ElementRef, Injector, TemplateRef, ViewChild } from '@angular/core';
import {
  SidebarComponent,
  TabComponent,
} from '@syncfusion/ej2-angular-navigations';
import { CallFuncService, DialogRef, SidebarModel, UIComponent } from 'codx-core';
import { DialogLeaveApprovaldetailsComponent } from './FormSide/dialog-leave-approvaldetails/dialog-leave-approvaldetails.component';
import { DialogRegisterApproveComponent } from './FormSide/dialog-register-approve/dialog-register-approve.component';
import { PopuMenusidebarReponsiveComponent } from './pop-up/popu-menusidebar-reponsive/popu-menusidebar-reponsive.component';
import { PopupReviewRegisterApproveComponent } from './pop-up/popup-review-register-approve/popup-review-register-approve.component';
import { PopupReviewReviewRegisterApprove2Component } from './pop-up/popup-review-review-register-approve2/popup-review-review-register-approve2.component';
import { PopupWaitingRegisterApproveComponent } from './pop-up/popup-waiting-register-approve/popup-waiting-register-approve.component';
import { PopupSpecializationEduComponent } from './pop-up/popup-specialization-edu/popup-specialization-edu.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends UIComponent {
  @ViewChild('sidebar') sidebar?: SidebarComponent;



  employeeID: any;
  previousEmployeeID: any;

  employeeID2: any;


  override onInit(): void {
    this.routeActive.queryParams.subscribe((params) => {
      const currentEmployeeID = params['employeeID'];
      if (currentEmployeeID !== this.previousEmployeeID) {
        console.log('EmployeeID đã thay đổi từ', this.previousEmployeeID, 'sang', currentEmployeeID);
        this.previousEmployeeID = currentEmployeeID;
      }
    });

    //Khen thưởng - kỷ luật

    this.initEmpAward()
    // this.initEmpDisciplinary()

    //Thông tin kiến thức

    this.initEmpEducation()
    // this.initEmpCertificate()
    // this.initEmpTrain()
    // this.initEmpEvaluation()

    //Quá trình làm việc

    this.initEmpEPromo()

    //Thông tin phúc lợi

    this.initEmpBenefit()

    //Test GridView
    this.initTestGridView()
  }

  constructor(private callfunc: CallFuncService, private inject: Injector, private routeActive: ActivatedRoute, private elementRef: ElementRef
  ) {
    super(inject);
  }

  sidebarOpen = false;

  rightPosition = 'Right';
  public width: string = '390';

  toggleSidebar() {
    if (this.sidebarOpen) {
      this.sidebar?.hide();
    } else {
      this.sidebar?.show();
    }
    this.sidebarOpen = !this.sidebarOpen;
  }

  onSidebarOpen() {
    console.log('Sidebar Opened');
  }

  onSidebarClose() {
    console.log('Sidebar Closed');
  }

  ReviewLeaveApprove() {
    console.log('click');
    console.log('this.callfunc:', this.callfunc);
    // this.callfunc.openForm(DialogRegisterApproveComponent);

    this.callfunc.openSide(PopuMenusidebarReponsiveComponent)

  }

  dialog?: DialogRef;


  openSideBarMenu() {
    let options = new SidebarModel();

    console.log("vô")

    options.Width = 'Auto';
    var obj = {
      currentTab: this.crrFuncTabNum // Truyền giá trị crrFuncTabNum vào popup
    };

    console.log(obj)
    // this.callfunc.openSide(PopupReviewRegisterApproveComponent, [],  options);
    // this.dialog = this.callfunc.openSide(PopuMenusidebarReponsiveComponent, [], options)
    this.dialog = this.callfunc.openSide(PopuMenusidebarReponsiveComponent, obj, options)


    this.dialog.componentRef.instance.tabChanged.subscribe((newTab: number) => {
      console.log(newTab)
      this.crrFuncTabNum = newTab;
      this.dialog?.close(true);
    });

  }

  card = [{
    iconClass: "icon-attach_money",
    iconColor: "#08AD36",
    backgroundColor: "#CEFFDC",
    subtitle: "Tổng mức lương NV",
    number: "$47.5 M",
    percent: "+ 2.9%",
    borderColor: "#0DA738",
    percentColor: "#0DA738",
    borderBottom: "5px solid #0DA738"
  }]

  dashboardCards = [
    {
      iconClass: "icon-attach_money",
      iconColor: "#08AD36",
      backgroundColor: "#CEFFDC",
      subtitle: "Tổng mức lương NV",
      number: "$47.5 M",
      percent: "+ 2.9%",
      borderColor: "#0DA738",
      percentColor: "#0DA738",
      borderBottom: "5px solid #0DA738"
    },
    {
      iconClass: "icon-i-hand-thumbs-up",
      iconColor: "#FF00A8",
      backgroundColor: "#FFE2E6",
      subtitle: "Mức độ hài lòng của NV",
      number: "90%",
      percent: "+ 2.9%",
      borderColor: "#FF00A8",
      percentColor: "#FF00A8",
      borderBottom: "5px solid #FF00A8"
    },
    {
      iconClass: "icon-groups",
      iconColor: "#005DC7",
      backgroundColor: "#EAF9FF",
      subtitle: "NV đang làm việc",
      number: "221",
      percent: "+ 2.9%",
      borderColor: "#005DC7",
      percentColor: "#005DC7",
      borderBottom: "5px solid #005DC7"
    },
    {
      iconClass: "icon-person_add",
      iconColor: "#FFA800",
      backgroundColor: "#FFF4DE",
      subtitle: "Mới vào làm trong tháng",
      number: "01",
      percent: "+ 2.9%",
      borderColor: "#FFA800",
      percentColor: "#FFA800",
      borderBottom: "5px solid #FFA800"
    },
    {
      iconClass: "icon-person_remove",
      iconColor: "#6C757D",
      backgroundColor: "#F1F1FA",
      subtitle: "Đã nghỉ việc trong tháng",
      number: "01",
      percent: "+ 2.9%",
      borderColor: "#6C757D",
      percentColor: "#6C757D",
      borderBottom: "5px solid #6C757D"
    }
  ];


  lstTab: any[] = [


    {
      functionID: 1,
      customName: "Dashboard",
      largeIcon: "icon-columns_gap" // Fake icon class
    },
    {
      functionID: 2,
      customName: "Thông tin cá nhân",
      largeIcon: "icon-assignment_ind" // Fake icon class
    },
    {
      functionID: 3,
      customName: "Quá trình làm việc",
      largeIcon: "icon-timeline" // Fake icon class
    },
    {
      functionID: 4,
      customName: "Khen thưởng kỷ luật",
      largeIcon: "icon-elevator" // Fake icon class
    },
    {
      functionID: 5,
      customName: "Thông tin phúc lợi",
      largeIcon: "icon-redeem" // Fake icon class
    },

    {
      functionID: 6,
      customName: "Thông tin pháp lý",
      largeIcon: "icon-gavel" // Fake icon class
    },
    {
      functionID: 7,
      customName: "Thông tin kiến thức",
      largeIcon: "icon-school" // Fake icon class
    }

  ];

  crrFuncTabNum: number = 1;
  heightList = '200';

  clickTab(item: any) {
    console.log(item)
    this.crrFuncTabNum = item.functionID;
    this.detectorRef.detectChanges();

  }


  lstFuncCurriculumVitaeFake: any[] = [
    {
      functionID: 1,
      customName: "Lý lịch cá nhân",
      largeIcon: "icon-assignment_ind",
      isActive: true
    },
    {
      functionID: 2,
      customName: "Liên hệ",
      largeIcon: "icon-phone",
      isActive: false

    },
    {
      functionID: 3,
      customName: "Công việc",
      largeIcon: "icon-content_paste",
      isActive: false

    },
    {
      functionID: 4,
      customName: "Bộ phận - chức danh",
      largeIcon: "icon-content_paste",
      isActive: false

    },
    {
      functionID: 5,
      customName: "Thân nhân",
      largeIcon: "icon-family_restroom",
      isActive: false

    }
  ]

  lstrewardCatalog: any[] = [
    {
      functionID: 1,
      customName: "Khen thưởng",
      largeIcon: "icon-sentiment_satisfied" // Fake icon class
    },
    {
      functionID: 2,
      customName: "Kỷ luật",
      largeIcon: "icon-sentiment_dissatisfied" // Fake icon class
    }
  ]

  lstFuncBenefits: any[] = [
    {
      functionID: 1,
      customName: "Nhóm lương",
      largeIcon: "icon-attach_money" // Fake icon class
    },
    {
      functionID: 2,
      customName: "Lương cơ bản",
      largeIcon: "icon-attach_money" // Fake icon class
    },
    {
      functionID: 3,
      customName: "Lương chức danh",
      largeIcon: "icon-content_paste" // Fake icon class
    },
    {
      functionID: 4,
      customName: "Phụ cấp",
      largeIcon: "icon-i-heart" // Fake icon class
    },
    {
      functionID: 5,
      customName: "Thu nhập khác",
      largeIcon: "icon-attach_money" // Fake icon class
    },
    {
      functionID: 6,
      customName: "Khấu trừ khác",
      largeIcon: "icon-attach_money" // Fake icon class
    }
  ]

  lstFuncLegalFakeInfo: any[] = [
    {
      functionID: 1,
      customName: "CMND - Mã số thuê",
      largeIcon: "icon-assignment_ind" // Fake icon class
    },
    {
      functionID: 2,
      customName: "Bảo hiểm xã hội",
      largeIcon: "icon-phone" // Fake icon class
    },
    {
      functionID: 3,
      customName: "Bảo hiểm y tế",
      largeIcon: "icon-content_paste" // Fake icon class
    },
    {
      functionID: 4,
      customName: "Bảo hiểm thất nghiệp",
      largeIcon: "icon-assignment_ind" // Fake icon class
    },
    {
      functionID: 5,
      customName: "Tài khoản cá nhân",
      largeIcon: "icon-assignment_ind" // Fake icon class
    },
    {
      functionID: 6,
      customName: "Hợp đồng lao động",
      largeIcon: "icon-assignment" // Fake icon class
    }
  ]

  lstFuncJobFakeInfo: any[] = [
    {
      functionID: 1,
      customName: "Bổ nhiệm - điều khiển",
      largeIcon: "icon-compare_arrows" // Fake icon class
    },
    {
      functionID: 2,
      customName: "Nghỉ phép",
      largeIcon: "icon-phone" // Fake icon class
    },
    {
      functionID: 3,
      customName: "Test GridView",
      largeIcon: "icon-phone" // Fake icon class
    }
  ]

  lstFuncEducationInfo: any[] = [
    {
      functionID: 1,
      customName: "Chuyên nghành đào tạo",
      largeIcon: "icon-school" // Fake icon class
    },
    {
      functionID: 2,
      customName: "Chứng chỉ",
      largeIcon: "icon-book" // Fake icon class
    },
    {
      functionID: 3,
      customName: "Đào tạo",
      largeIcon: "icon-local_library" // Fake icon class
    },
    {
      functionID: 4,
      customName: "Đánh giá",
      largeIcon: "icon-edit" // Fake icon class
    }
  ]


  isClick: boolean = false;
  active = [null, null, null, null, null, null, null];



  navChange(evt: any, index: number = -1, functionID: number = -1, btnClick: any) {
    let containerList = document.querySelectorAll('.pw-content');
    let lastDivList = document.querySelectorAll('.div_final');
    console.log(containerList)
    let lastDiv = lastDivList[index];
    let container = containerList[index];
    console.log('container', container)
    let containerHeight = (container as any).offsetHeight;
    let contentHeight = 0;
    for (let i = 0; i < container.children.length; i++) {
      contentHeight += (container.children[i] as any).offsetHeight;
    }

    if (!evt) return;
    let element = document.getElementById(evt);
    console.log(element)
    if (!element) return;
    let distanceToBottom = contentHeight - element.offsetTop;

    if (distanceToBottom < containerHeight) {
      (lastDiv as any).style.width = '200px';
      (lastDiv as any).style.height = `${containerHeight - distanceToBottom + 50
        }px`;
    }

    if (index > -1) {
      this.active[functionID] = evt;
      console.log(this.active)
      this.detectorRef.detectChanges();
    }
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    console.log('qua')
    this.isClick = true;
    this.detectorRef.detectChanges();
    setTimeout(() => {
      this.isClick = false;
      return;
    }, 500);
  }

  onSectionChange(data: any, index: number = -1) {
    if (index > -1 && this.isClick == false) {
      this.active[index] = data;
      console.log(this.active)
      this.detectorRef.detectChanges();
    }
  }


  @ViewChild('navList') navList: ElementRef | undefined;
  showLeftButton: boolean = true;
  showRightButton: boolean = false;

  scroll(direction: string): void {
    const navListWidth = this.navList?.nativeElement.scrollWidth;
    const containerWidth = this.navList?.nativeElement.offsetWidth;
    const scrollPosition = this.navList?.nativeElement.scrollLeft;

    if (direction === 'left') {
      this.navList?.nativeElement.scrollTo({ left: scrollPosition - containerWidth, behavior: 'smooth' });
    } else {
      this.navList?.nativeElement.scrollTo({ left: scrollPosition + containerWidth, behavior: 'smooth' });
    }
  }

  reviewRegisterApprove(event: any) {
    let options = new SidebarModel();

    console.log("vô")

    options.Width = 'Auto';
    var obj = {
      currentTab: this.crrFuncTabNum // Truyền giá trị crrFuncTabNum vào popup
    };

    console.log(obj)
    // this.callfunc.openSide(PopupReviewRegisterApproveComponent, [],  options);
    // this.dialog = this.callfunc.openSide(PopuMenusidebarReponsiveComponent, [], options)
    this.dialog = this.callfunc.openSide(PopupReviewReviewRegisterApprove2Component, obj, options)



  }

  waitingRegisterApprove(event: any) {
    let options = new SidebarModel();

    console.log("vô")

    options.Width = 'Auto';
    // this.callfunc.openSide(PopupReviewRegisterApproveComponent, [],  options);
    // this.dialog = this.callfunc.openSide(PopuMenusidebarReponsiveComponent, [], options)
    this.dialog = this.callfunc.openSide(PopupWaitingRegisterApproveComponent, [], options)



  }



  cardDataFake = [
    { title: 'Công việc làm', content: '15', subContent: '/24', color: '#17BB45', icon: 'icon-bar_chart', typeIcon: '' },
    { title: 'Tăng ca', content: '15', subContent: '/24', color: '#FFA800', icon: 'icon-bar_chart', typeIcon: '' },
    { title: 'Tăng ca', content: '8', subContent: ' giờ', color: '#F64E60', icon: 'icon-trending_up', typeIcon: 'icon-small' },
    { title: 'Tăng ca', content: '180', subContent: ' phút', color: '#6C757D', icon: 'icon-trending_down', typeIcon: 'icon-small' }
  ];

  private hoveredItem: any = null; // Biến để lưu trữ card đang được hover

  startShimmerAnimation(item: any, event: MouseEvent) {
    if (this.hoveredItem !== item) {
      const shimmerLine = (event.currentTarget as HTMLElement).querySelector('.shimmer-line');
      if (shimmerLine) {
        this.removeShimmerAnimation();

        shimmerLine.classList.add('run-shimmer-animation');

        this.hoveredItem = item;

        shimmerLine.addEventListener('animationend', this.removeShimmerAnimation.bind(this), { once: true });
      }
    }
  }

  removeShimmerAnimation() {
    if (this.hoveredItem) {
      const shimmerLine = document.querySelector(`.info-item[data-item="${this.hoveredItem.title}"] .shimmer-line`);
      if (shimmerLine) {
        shimmerLine.classList.remove('run-shimmer-animation');
      }
      this.hoveredItem = null;
    }
  }

  openSpecializationEdu() {
    let options = new SidebarModel();


    options.Width = 'Auto';

    this.dialog = this.callfunc.openSide(PopupSpecializationEduComponent, [], options)
  }



  //New

  // nextEmp() {
  // if (this.listEmp.length <= this.totalCount) {
  //   this.crrIndex += 1;
  //   if (this.fromView == 'listView') {
  //     if (
  //       this.crrIndex == this.listEmp.length - 1 ||
  //       (this.crrIndex == this.listEmp.length &&
  //         this.crrIndex < this.totalCount - 1)
  //     ) {
  //       if (
  //         this.crrIndex == this.listEmp.length &&
  //         this.crrIndex < this.totalCount - 1
  //       ) {
  //         this.request.page = this.request.page;
  //       } else {
  //         this.request.page += 1;
  //       }

  //       this.hrService.loadData('HR', this.request).subscribe((res) => {
  //         if (res && res[0].length > 0) {
  //           this.listEmp.push(...res[0]);
  //           this.navigateEmp(0, true);
  //         } else {
  //           this.navigateEmp(0);
  //         }
  //       });
  //     } else {
  //       this.navigateEmp(0);
  //     }
  //   } else if (this.fromView == 'gridView') {
  //     if (this.crrIndex == this.listEmp.length) {
  //       this.request.page += 1;
  //       this.hrService.loadData('HR', this.request).subscribe((res) => {
  //         if (res && res[0].length > 0) {
  //           this.listEmp.push(...res[0]);
  //           this.navigateEmp(0, true);
  //         } else {
  //           this.navigateEmp(0);
  //         }
  //       });
  //     }
  //     if (this.crrIndex > -1 && this.crrIndex != this.listEmp.length) {
  //       this.navigateEmp(0);
  //     }
  //   }
  // this.loadDataWhenChangeEmp();
  // this.refreshGridViews();
  //   }
  // }

  onSelectEmployee(event: any) {
    this.navigateEmp(event);
  }

  navigateEmp(event: any) {
    // if (isNextPage == true) {
    //   let newPageNum = Number(this.pageNum) + 1;
    //   this.pageNum = newPageNum;
    // }
    // if (this.crrIndex > -1) {
    // this.LoadedEInfo = false;
    // this.infoPersonal = null;
    let urlView = `/employeedetail/HR001`;
    this.codxService.replaceNavigate(
      urlView,
      {
        employeeID: '123456',
        employeeID2: event,

        // page: this.pageNum.toString(),
        // totalPage: this.maxPageNum,
        // totalCount: this.totalCount,
        // from: this.fromView
      }
      // ,
      // {
      //   data: this.listEmp,
      //   request: this.request,
      //   totalPage: this.maxPageNum,
      //   totalCount: this.totalCount,
      //   from: this.fromView,
      // }
    );
    // }
  }


  showScroll = false;


  showScrollbar() {
    const profileField = this.elementRef.nativeElement.querySelector('.my-profile-filed');
    if (profileField.scrollHeight > profileField.clientHeight) {
      console.log('check')
      this.showScroll = true;
      console.log(this.showScroll)
    }
  }

  hideScrollbar() {
    this.showScroll = false;
  }

  onScroll(event: Event) {
    const profileField = this.elementRef.nativeElement.querySelector('.my-profile-filed');
    const content = this.elementRef.nativeElement.querySelector('.content');
    const scrollbar = this.elementRef.nativeElement.querySelector('.scrollbar');

    const scrollableHeight = profileField.scrollHeight - profileField.clientHeight;
    const scrollbarHeight = profileField.clientHeight / profileField.scrollHeight * profileField.clientHeight;
    const scrollTop = profileField.scrollTop / scrollableHeight * (profileField.clientHeight - scrollbarHeight);

    scrollbar.style.height = scrollbarHeight + 'px';
    scrollbar.style.top = scrollTop + 'px';
    content.style.marginRight = scrollbar.clientWidth + 'px';
  }



  // initEmpKnowledge() {
  //   if (!this.eDegreeColumnsGrid) {
  //     this.hrService.getHeaderText(this.eDegreeFuncID).then((res) => {
  //       this.eDegreeHeaderText = res;
  //       this.eDegreeColumnsGrid = [
  //         {
  //           headerTemplate: this.headTempDegree1,
  //           template: this.templateEDegreeGridCol1,
  //           width: '150',
  //         },
  //         {
  //           headerTemplate: this.headTempDegree2,
  //           template: this.templateEDegreeGridCol2,
  //           width: '150',
  //         },
  //         {
  //           headerTemplate: this.headTempDegree3,
  //           template: this.templateEDegreeGridCol3,
  //           width: '150',
  //         },
  //       ];
  //     });

  //     this.df.detectChanges();
  //   }

  //   if (!this.eCertificateColumnGrid)
  //   {
  //     this.hrService.getHeaderText(this.eCertificateFuncID).then((res) => {
  //       this.eCertificateHeaderText = res;
  //       this.eCertificateColumnGrid = [
  //         {
  //           headerTemplate: this.headTempCertificate1,
  //           template: this.templateECertificateGridCol1,
  //           width: '150',
  //         },
  //         {
  //           headerTemplate: this.headTempCertificate2,
  //           template: this.templateECertificateGridCol2,
  //           width: '150',
  //         },
  //         {
  //           headerTemplate: this.headTempCertificate3,
  //           template: this.templateECertificateGridCol3,
  //           width: '150',
  //         },
  //       ];
  //     });
  //   }

  //   if (!this.eSkillColumnGrid) {
  //     this.hrService.getHeaderText(this.eSkillFuncID).then((res) => {
  //       this.eSkillHeaderText = res;
  //       this.eSkillColumnGrid = [
  //         {
  //           headerTemplate: this.headTempSkill1,
  //           template: this.templateESkillGridCol1,
  //           width: '150',
  //         },
  //         {
  //           headerTemplate: this.headTempSkill2,
  //           template: this.templateESkillGridCol2,
  //           width: '150',
  //         },
  //         {
  //           headerTemplate: this.headTempSkill3,
  //           template: this.templateESkillGridCol3,
  //           width: '150',
  //         },
  //       ];
  //     });
  //     this.df.detectChanges();
  //   }

  //   if (!this.eTrainCourseColumnGrid) {
  //     if (!this.eTrainCourseColumnGrid) {
  //       this.hrService.getHeaderText(this.eTrainCourseFuncID).then((res) => {
  //         this.eTrainCourseHeaderText = res;
  //         this.eTrainCourseColumnGrid = [
  //           {
  //             headerTemplate: this.headTempTrainCourse1,
  //             template: this.templateTrainCourseGridCol1,
  //             width: '150',
  //           },
  //           {
  //             headerTemplate: this.headTempTrainCourse2,
  //             template: this.templateTrainCourseGridCol2,
  //             width: '150',
  //           },
  //           {
  //             headerTemplate: this.headTempTrainCourse3,
  //             template: this.templateTrainCourseGridCol3,
  //             width: '150',
  //           },
  //         ];
  //       });
  //     }
  //   }
  // }



  //Khen thưởng
  eAwardColumnGrid!: any[];

  @ViewChild('templateEAwardGridCol1', { static: true })
  templateEAwardGridCol1: TemplateRef<any> | undefined;
  @ViewChild('templateEAwardGridCol2', { static: true })
  templateEAwardGridCol2: TemplateRef<any> | undefined;
  @ViewChild('templateEAwardGridCol3', { static: true })
  templateEAwardGridCol3: TemplateRef<any> | undefined;
  @ViewChild('templateEAwardGridCol4', { static: true })
  templateEAwardGridCol4: TemplateRef<any> | undefined;
  @ViewChild('templateEAwardGridCol5', { static: true })
  templateEAwardGridCol5: TemplateRef<any> | undefined;

  //Kỷ luật
  eDisciplinaryGrid!: any[];

  @ViewChild('templateEDisciplinaryCol1', { static: true })
  templateEDisciplinaryCol1: TemplateRef<any> | undefined;
  @ViewChild('templateEDisciplinaryCol2', { static: true })
  templateEDisciplinaryCol2: TemplateRef<any> | undefined;
  @ViewChild('templateEDisciplinaryCol3', { static: true })
  templateEDisciplinaryCol3: TemplateRef<any> | undefined;
  @ViewChild('templateEDisciplinaryCol4', { static: true })
  templateEDisciplinaryCol4: TemplateRef<any> | undefined;



  initEmpAward() {
    if (!this.eAwardColumnGrid) {
      // this.hrService.getHeaderText(this.eSkillFuncID).then((res) => {
      //   this.eSkillHeaderText = res;
      this.eAwardColumnGrid = [
        {
          headerText: 'Người duyệt',
          template: this.templateEAwardGridCol1,
          width: '240',
        },
        {
          headerText: 'Ngày duyệt',
          template: this.templateEAwardGridCol2,
          width: '240',
        },
        {
          headerText: 'Nội dung',
          template: this.templateEAwardGridCol3,
          width: '240',
        },
        {
          headerText: 'Duyệt',
          template: this.templateEAwardGridCol4,
          width: '240',
        },
        {
          headerText: 'Tình trạng phiếu',
          template: this.templateEAwardGridCol5,
          width: '240',
        }
      ];

      // });
      // this.df.detectChanges();

    }

    if (!this.eDisciplinaryGrid) {
      // this.hrService.getHeaderText(this.eSkillFuncID).then((res) => {
      //   this.eSkillHeaderText = res;
      this.eDisciplinaryGrid = [
        {
          headerText: 'Loại quyết định',
          template: this.templateEDisciplinaryCol1,
          width: '300',
        },
        {
          headerText: 'Số quyết định',
          template: this.templateEDisciplinaryCol2,
          width: '300',
        },
        {
          headerText: 'Hình thức kỷ luật',
          template: this.templateEDisciplinaryCol3,
          width: '300',
        },
        {
          headerText: 'Thời gian kỷ luật',
          template: this.templateEDisciplinaryCol4,
          width: '300',
        }
      ];

      // });
      // this.df.detectChanges();

    }
  };




  // initEmpDisciplinary() {

  // };


  //Chuyên nghành đào tạo
  eSpecializationColumnGrid!: any[];

  @ViewChild('templateESpecializationCol1', { static: true })
  templateESpecializationCol1: TemplateRef<any> | undefined;
  @ViewChild('templateESpecializationCol2', { static: true })
  templateESpecializationCol2: TemplateRef<any> | undefined;
  @ViewChild('templateESpecializationCol3', { static: true })
  templateESpecializationCol3: TemplateRef<any> | undefined;
  @ViewChild('templateESpecializationCol4', { static: true })
  templateESpecializationCol4: TemplateRef<any> | undefined;

  //Chứng chỉ
  eCertificateColumnGrid!: any[];

  @ViewChild('templateECertificateCol1', { static: true })
  templateECertificateCol1: TemplateRef<any> | undefined;
  @ViewChild('templateECertificateCol2', { static: true })
  templateECertificateCol2: TemplateRef<any> | undefined;
  @ViewChild('templateECertificateCol3', { static: true })
  templateECertificateCol3: TemplateRef<any> | undefined;
  @ViewChild('templateECertificateCol4', { static: true })
  templateECertificateCol4: TemplateRef<any> | undefined;


  //Đào tạo
  eTrainColumnGrid!: any[];

  @ViewChild('templateETrainCol1', { static: true })
  templateETrainCol1: TemplateRef<any> | undefined;
  @ViewChild('templateETrainCol2', { static: true })
  templateETrainCol2: TemplateRef<any> | undefined;
  @ViewChild('templateETrainCol3', { static: true })
  templateETrainCol3: TemplateRef<any> | undefined;
  @ViewChild('templateETrainCol4', { static: true })
  templateETrainCol4: TemplateRef<any> | undefined;


  //Đánh giá
  eEvaluationColumnGrid!: any[];

  @ViewChild('templateEEvaluationCol1', { static: true })
  templateEEvaluationCol1: TemplateRef<any> | undefined;
  @ViewChild('templateEEvaluationCol2', { static: true })
  templateEEvaluationCol2: TemplateRef<any> | undefined;
  @ViewChild('templateEEvaluationCol3', { static: true })
  templateEEvaluationCol3: TemplateRef<any> | undefined;
  @ViewChild('templateEEvaluationCol4', { static: true })
  templateEEvaluationCol4: TemplateRef<any> | undefined;



  initEmpEducation() {
    if (!this.eSpecializationColumnGrid) {
      // this.hrService.getHeaderText(this.eSkillFuncID).then((res) => {
      //   this.eSkillHeaderText = res;
      this.eSpecializationColumnGrid = [
        {
          headerText: 'Tên chuyên nghành',
          template: this.templateESpecializationCol1,
          width: '300',
        },
        {
          headerText: 'Nơi đào tạo',
          template: this.templateESpecializationCol2,
          width: '300',
        },
        {
          headerText: 'Thời gian đào tạo',
          template: this.templateESpecializationCol3,
          width: '300',
        },
        {
          headerText: 'Năm tốt nghiệp',
          template: this.templateESpecializationCol4,
          width: '300',
        }
      ];

      // });
      // this.df.detectChanges();

    }

    if (!this.eCertificateColumnGrid) {
      // this.hrService.getHeaderText(this.eSkillFuncID).then((res) => {
      //   this.eSkillHeaderText = res;
      this.eCertificateColumnGrid = [
        {
          headerText: 'Tên chứng chỉ',
          template: this.templateECertificateCol1,
          width: '300',
        },
        {
          headerText: 'Nơi đào tạo | Xếp hạng',
          template: this.templateECertificateCol2,
          width: '300',
        },
        {
          headerText: 'Thời gian đào tạo',
          template: this.templateECertificateCol3,
          width: '300',
        },
        {
          headerText: 'Ngày cấp',
          template: this.templateECertificateCol4,
          width: '300',
        }
      ];

      // });
      // this.df.detectChanges();

    }

    if (!this.eTrainColumnGrid) {
      // this.hrService.getHeaderText(this.eSkillFuncID).then((res) => {
      //   this.eSkillHeaderText = res;
      this.eTrainColumnGrid = [
        {
          headerText: 'Tên chứng chỉ',
          template: this.templateETrainCol1,
          width: '300',
        },
        {
          headerText: 'Nơi đào tạo | Xếp hạng',
          template: this.templateETrainCol2,
          width: '300',
        },
        {
          headerText: 'Thời gian đào tạo',
          template: this.templateETrainCol3,
          width: '300',
        },
        {
          headerText: 'Ngày hiệu lực',
          template: this.templateETrainCol4,
          width: '300',
        }
      ];

      // });
      // this.df.detectChanges();

    }

    if (!this.eEvaluationColumnGrid) {
      // this.hrService.getHeaderText(this.eSkillFuncID).then((res) => {
      //   this.eSkillHeaderText = res;
      this.eEvaluationColumnGrid = [
        {
          headerText: 'Năm đánh giá',
          template: this.templateEEvaluationCol1,
          width: '300',
        },
        {
          headerText: 'Kỳ',
          template: this.templateEEvaluationCol2,
          width: '300',
        },
        {
          headerText: 'Điểm | Xếp loại',
          template: this.templateEEvaluationCol3,
          width: '300',
        },
        {
          headerText: 'Nhận xét',
          template: this.templateEEvaluationCol4,
          width: '300',
        }
      ];

      // });
      // this.df.detectChanges();

    }

  };


  //Quá trình làm việc

  //Bổ nhiệm - điều khiển
  ePromoColumnGrid!: any[];


  @ViewChild('templateEPromoCol1', { static: true })
  templateEPromoCol1: TemplateRef<any> | undefined;
  @ViewChild('templateEPromoCol2', { static: true })
  templateEPromoCol2: TemplateRef<any> | undefined;
  @ViewChild('templateEPromoCol3', { static: true })
  templateEPromoCol3: TemplateRef<any> | undefined;
  @ViewChild('templateEPromoCol4', { static: true })
  templateEPromoCol4: TemplateRef<any> | undefined;
  @ViewChild('templateEPromoCol5', { static: true })
  templateEPromoCol5: TemplateRef<any> | undefined;
  @ViewChild('templateEPromoCol6', { static: true })
  templateEPromoCol6: TemplateRef<any> | undefined;

  eLeaveColumnGrid!: any[];


  @ViewChild('templateELeaveCol1', { static: true })
  templateELeaveCol1: TemplateRef<any> | undefined;
  @ViewChild('templateELeaveCol2', { static: true })
  templateELeaveCol2: TemplateRef<any> | undefined;
  @ViewChild('templateELeaveCol3', { static: true })
  templateELeaveCol3: TemplateRef<any> | undefined;
  @ViewChild('templateELeaveCol4', { static: true })
  templateELeaveCol4: TemplateRef<any> | undefined;
  @ViewChild('templateELeaveCol5', { static: true })
  templateELeaveCol5: TemplateRef<any> | undefined;
  @ViewChild('templateELeaveCol6', { static: true })
  templateELeaveCol6: TemplateRef<any> | undefined;
  @ViewChild('templateELeaveCol7', { static: true })
  templateELeaveCol7: TemplateRef<any> | undefined;


  // Test GridView
  eTestGridViewColumnGrid!: any[];

  @ViewChild('templateETestGridViewCol1', { static: true })
  templateETestGridViewCol1: TemplateRef<any> | undefined;
  @ViewChild('templateETestGridViewCol2', { static: true })
  templateETestGridViewCol2: TemplateRef<any> | undefined;
  @ViewChild('templateETestGridViewCol3', { static: true })
  templateETestGridViewCol3: TemplateRef<any> | undefined;
  @ViewChild('templateETestGridViewCol4', { static: true })
  templateETestGridViewCol4: TemplateRef<any> | undefined;
  @ViewChild('templateETestGridViewCol5', { static: true })
  templateETestGridViewCol5: TemplateRef<any> | undefined;

  initTestGridView() {
    if (!this.eTestGridViewColumnGrid) {
      this.eTestGridViewColumnGrid = [
        {
          headerText: 'Header 1',
          template: this.templateETestGridViewCol1,
          width: '300',
        },
        {
          headerText: 'Header 2',
          template: this.templateETestGridViewCol2,
          width: '300',
        },
        {
          headerText: 'Header 3',
          template: this.templateETestGridViewCol3,
          width: '300',
        },
        {
          headerText: 'Header 4',
          template: this.templateETestGridViewCol4,
          width: '300',
        },
        {
          headerText: '',
          template: this.templateETestGridViewCol5,
          width: '300',
        }
      ];

      // });
      // this.df.detectChanges();

    }
  }

  initEmpEPromo() {
    if (!this.ePromoColumnGrid) {
      // this.hrService.getHeaderText(this.eSkillFuncID).then((res) => {
      //   this.eSkillHeaderText = res;
      this.ePromoColumnGrid = [
        {
          headerText: 'Loại quyết định',
          template: this.templateEPromoCol1,
          width: '200',
        },
        {
          headerText: 'Số quyết định',
          template: this.templateEPromoCol2,
          width: '300',
        },
        {
          headerText: 'Ngày hiệu lực',
          template: this.templateEPromoCol3,
          width: '200',
        },
        {
          headerText: 'Đến Ngày',
          template: this.templateEPromoCol4,
          width: '200',
        },
        {
          headerText: 'Bộ phận',
          template: this.templateEPromoCol5,
          width: '200',
        },
        {
          headerText: 'Chức danh',
          template: this.templateEPromoCol6,
          width: '30%',
        }
      ];

      // });
      // this.df.detectChanges();

    }

    if (!this.eLeaveColumnGrid) {
      // this.hrService.getHeaderText(this.eSkillFuncID).then((res) => {
      //   this.eSkillHeaderText = res;
      this.eLeaveColumnGrid = [
        {
          headerText: 'Loại nghỉ',
          template: this.templateELeaveCol1,
          width: '130',
        },
        {
          headerText: 'Từ ngày',
          template: this.templateELeaveCol2,
          width: '130',
        },
        {
          headerText: 'Đến ngày',
          template: this.templateELeaveCol3,
          width: '150',
        },
        {
          headerText: 'Số ngày nghỉ',
          template: this.templateELeaveCol4,
          width: '150',
        },
        {
          headerText: 'Tổng ngày trừ',
          template: this.templateELeaveCol5,
          width: '150',
        },
        {
          headerText: 'Lý do',
          template: this.templateELeaveCol6,
          width: '30%',
        }
        ,
        {
          headerText: 'Năm trừ phép',
          template: this.templateELeaveCol7,
          width: '150',
        }
      ];

      // });
      // this.df.detectChanges();

    }
  };








  //-------------------Thông tin phúc lợi -------------

  eBasicSalaryColumnGrid!: any[];


  @ViewChild('templateEBasicSalaryCol1', { static: true })
  templateEBasicSalaryCol1: TemplateRef<any> | undefined;
  @ViewChild('templateEBasicSalaryCol2', { static: true })
  templateEBasicSalaryCol2: TemplateRef<any> | undefined;
  @ViewChild('templateEBasicSalaryCol3', { static: true })
  templateEBasicSalaryCol3: TemplateRef<any> | undefined;


  eJobSalaryColumnGrid!: any[];


  @ViewChild('templateEJobSalaryCol1', { static: true })
  templateEJobSalaryCol1: TemplateRef<any> | undefined;
  @ViewChild('templateEJobSalaryCol2', { static: true })
  templateEJobSalaryCol2: TemplateRef<any> | undefined;
  @ViewChild('templateEJobSalaryCol3', { static: true })
  templateEJobSalaryCol3: TemplateRef<any> | undefined;



  initEmpBenefit() {
    if (!this.eBasicSalaryColumnGrid) {
      // this.hrService.getHeaderText(this.eSkillFuncID).then((res) => {
      //   this.eSkillHeaderText = res;
      this.eBasicSalaryColumnGrid = [
        {
          headerText: 'Ngày hiệu lực',
          template: this.templateEBasicSalaryCol1,
          width: '600',
        },
        {
          headerText: 'Mức lương',
          template: this.templateEBasicSalaryCol2,
          width: '32%',
        },
        {
          headerText: 'Đang hiệu lực',
          template: this.templateEBasicSalaryCol3,
          width: '32%',
        }
      ];

      // });
      // this.df.detectChanges();

    }

    if (!this.eJobSalaryColumnGrid) {
      // this.hrService.getHeaderText(this.eSkillFuncID).then((res) => {
      //   this.eSkillHeaderText = res;
      this.eJobSalaryColumnGrid = [
        {
          headerText: 'Ngày hiệu lực',
          template: this.templateEJobSalaryCol1,
          width: '600',
        },
        {
          headerText: 'Mức lương',
          template: this.templateEJobSalaryCol2,
          width: '32%',
        },
        {
          headerText: 'Đang hiệu lực',
          template: this.templateEJobSalaryCol3,
          width: '32%',
        }
      ];

      // });
      // this.df.detectChanges();

    }
  };



  lstAwardData: any[] = [


    {
      functionID: 1,
      customName: "Dashboard",
      largeIcon: "icon-columns_gap" // Fake icon class
    },
    {
      functionID: 2,
      customName: "Thông tin cá nhân",
      largeIcon: "icon-assignment_ind" // Fake icon class
    },
    {
      functionID: 3,
      customName: "Quá trình làm việc",
      largeIcon: "icon-timeline" // Fake icon class
    },
    {
      functionID: 4,
      customName: "Khen thưởng kỷ luật",
      largeIcon: "icon-elevator" // Fake icon class
    },
    {
      functionID: 5,
      customName: "Thông tin phúc lợi",
      largeIcon: "icon-redeem" // Fake icon class
    },

    {
      functionID: 6,
      customName: "Thông tin pháp lý",
      largeIcon: "icon-gavel" // Fake icon class
    },
    {
      functionID: 7,
      customName: "Thông tin kiến thức",
      largeIcon: "icon-school" // Fake icon class
    }

  ];


}


