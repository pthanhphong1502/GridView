import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuMenusidebarReponsiveComponent } from './popu-menusidebar-reponsive.component';

describe('PopuMenusidebarReponsiveComponent', () => {
  let component: PopuMenusidebarReponsiveComponent;
  let fixture: ComponentFixture<PopuMenusidebarReponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopuMenusidebarReponsiveComponent]
    });
    fixture = TestBed.createComponent(PopuMenusidebarReponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
