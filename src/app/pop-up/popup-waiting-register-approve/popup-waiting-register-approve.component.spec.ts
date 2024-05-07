import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWaitingRegisterApproveComponent } from './popup-waiting-register-approve.component';

describe('PopupWaitingRegisterApproveComponent', () => {
  let component: PopupWaitingRegisterApproveComponent;
  let fixture: ComponentFixture<PopupWaitingRegisterApproveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupWaitingRegisterApproveComponent]
    });
    fixture = TestBed.createComponent(PopupWaitingRegisterApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
