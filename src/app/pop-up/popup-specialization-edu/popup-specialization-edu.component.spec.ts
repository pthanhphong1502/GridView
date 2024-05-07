import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSpecializationEduComponent } from './popup-specialization-edu.component';

describe('PopupSpecializationEduComponent', () => {
  let component: PopupSpecializationEduComponent;
  let fixture: ComponentFixture<PopupSpecializationEduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupSpecializationEduComponent]
    });
    fixture = TestBed.createComponent(PopupSpecializationEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
