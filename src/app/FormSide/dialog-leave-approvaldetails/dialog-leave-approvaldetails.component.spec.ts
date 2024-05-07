import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLeaveApprovaldetailsComponent } from './dialog-leave-approvaldetails.component';

describe('DialogLeaveApprovaldetailsComponent', () => {
  let component: DialogLeaveApprovaldetailsComponent;
  let fixture: ComponentFixture<DialogLeaveApprovaldetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogLeaveApprovaldetailsComponent]
    });
    fixture = TestBed.createComponent(DialogLeaveApprovaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
