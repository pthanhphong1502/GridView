import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SwiperClickingDirective } from './SwiperClicking/swiper-clicking.directive';
import { SidebarToggleDirective } from './SidebarToggle/sidebar-toggle.directive';
import { SwiperClickingDirective } from './SwiperClicking/swiper-clicking.directive';
import { ScrollSpyDirective } from './scrollSpy/scroll-spy.directive';
import { CountUpDirective } from './countUp/count-up.directive';
import {ToggleScrollDirective } from './toggleAnimation/toggle-animation.directive';

const COMPONENT: Type<any>[] = [
  SwiperClickingDirective,
  SidebarToggleDirective,
  ScrollSpyDirective,
 ToggleScrollDirective
];

const MODULES: Type<any>[] = [];
@NgModule({
  declarations: [SidebarToggleDirective, SwiperClickingDirective, ScrollSpyDirective, CountUpDirective, ToggleScrollDirective],
  imports: [CommonModule, ...MODULES],
  exports: [MODULES, SidebarToggleDirective, SwiperClickingDirective, ScrollSpyDirective, CountUpDirective, ToggleScrollDirective],
})
export class DirectivesModule {}
