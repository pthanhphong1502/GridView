import { TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';
import { SidebarToggleDirective } from './sidebar-toggle.directive';

describe('SidebarToggleDirective', () => {
  let directive: SidebarToggleDirective;
  let renderer: Renderer2;
  let elementRef: ElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Renderer2,
        ElementRef
      ]
    });

    renderer = TestBed.inject(Renderer2);
    elementRef = TestBed.inject(ElementRef);
    directive = new SidebarToggleDirective(elementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
