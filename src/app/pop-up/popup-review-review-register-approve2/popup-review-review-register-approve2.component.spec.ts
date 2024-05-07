import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupReviewReviewRegisterApprove2Component } from './popup-review-review-register-approve2.component';

describe('PopupReviewReviewRegisterApprove2Component', () => {
  let component: PopupReviewReviewRegisterApprove2Component;
  let fixture: ComponentFixture<PopupReviewReviewRegisterApprove2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupReviewReviewRegisterApprove2Component]
    });
    fixture = TestBed.createComponent(PopupReviewReviewRegisterApprove2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
