import { NgModule } from '@angular/core';
import { NgMarqueeComponent } from './ng-marquee/ng-marquee.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NgMarqueeComponent],
  exports: [NgMarqueeComponent]
})
export class NgMarqueeModule { }
