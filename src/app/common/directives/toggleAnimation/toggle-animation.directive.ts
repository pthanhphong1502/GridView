import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToggleScroll]'
})
export class ToggleScrollDirective {
  private isOpen = false;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick(): void {
    const parentElement = this.el.nativeElement.parentElement;
    parentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    const iconElement = parentElement.querySelector('span');
    if (iconElement) {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        iconElement.classList.remove('rotate-90');
      } else {
        iconElement.classList.add('rotate-90');
      }
    }

    const contentElement = parentElement.nextElementSibling;
    if (contentElement) {
      contentElement.classList.toggle('hidden');
    }
  }
}