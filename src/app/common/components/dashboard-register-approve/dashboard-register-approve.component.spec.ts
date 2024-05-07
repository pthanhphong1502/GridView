import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRegisterApproveComponent } from './dashboard-register-approve.component';

describe('DashboardRegisterApproveComponent', () => {
  let component: DashboardRegisterApproveComponent;
  let fixture: ComponentFixture<DashboardRegisterApproveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRegisterApproveComponent]
    });
    fixture = TestBed.createComponent(DashboardRegisterApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
