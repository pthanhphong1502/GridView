import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallFuncService, CodxCoreModule } from 'codx-core';
import { DirectivesModule } from './common/directives/directives.module';
import { DialogLeaveApprovaldetailsComponent } from './FormSide/dialog-leave-approvaldetails/dialog-leave-approvaldetails.component';
import { DialogRegisterApproveComponent } from './FormSide/dialog-register-approve/dialog-register-approve.component';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { EmployeeInfoProfileComponent } from './common/components/employee-info-profile/employee-info-profile.component';
import { SwiperClickingDirective } from './common/directives/SwiperClicking/swiper-clicking.directive';
import { ScrollSpyDirective } from './common/directives/scrollSpy/scroll-spy.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRegisterApproveComponent } from './common/components/dashboard-register-approve/dashboard-register-approve.component';
import { PopupReviewRegisterApproveComponent } from './pop-up/popup-review-register-approve/popup-review-register-approve.component';
import { PopupReviewReviewRegisterApprove2Component } from './pop-up/popup-review-review-register-approve2/popup-review-review-register-approve2.component';
import { PopupWaitingRegisterApproveComponent } from './pop-up/popup-waiting-register-approve/popup-waiting-register-approve.component';
import { SelectScrollBarComponent } from './common/components/select-scroll-bar/select-scroll-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileDashboardLeaveComponent } from './common/components/profile-dashboard-leave/profile-dashboard-leave.component';
import { ProfileLast7dayComponent } from './common/components/profile-last7day/profile-last7day.component';
import { PopuMenusidebarReponsiveComponent } from './pop-up/popu-menusidebar-reponsive/popu-menusidebar-reponsive.component';
import { PopupSpecializationEduComponent } from './pop-up/popup-specialization-edu/popup-specialization-edu.component';
import { RouterModule } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogLeaveApprovaldetailsComponent,
    DialogRegisterApproveComponent,
    MyTeamComponent,
    MyTeamComponent,
    EmployeeInfoProfileComponent,
    PopuMenusidebarReponsiveComponent,
    PopupReviewRegisterApproveComponent,
    DashboardRegisterApproveComponent,
    PopupReviewReviewRegisterApprove2Component,
    PopupReviewReviewRegisterApprove2Component,
    PopupWaitingRegisterApproveComponent,
    SelectScrollBarComponent,
    ProfileDashboardLeaveComponent,
    ProfileLast7dayComponent,
    PopupSpecializationEduComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodxCoreModule,
    DirectivesModule,
    CommonModule,
    FormsModule,
    OverlayModule,
    HttpClientModule,
    SliderModule,
    CodxCoreModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'hr',
        component: AppComponent,
        children: [
          {
            path: 'tab',
            component: TabComponent
          }
        ]
      },
    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
