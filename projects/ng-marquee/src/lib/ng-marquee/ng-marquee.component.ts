import { Component, OnInit, ChangeDetectionStrategy, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-marquee',
  templateUrl: './ng-marquee.component.html',
  styleUrls: ['./ng-marquee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgMarqueeComponent implements OnInit, AfterViewInit {

  @Input() duration: string | number;
  @ViewChild('marqueeContainer', { static: true }) animationElem: ElementRef<HTMLDivElement>;

  constructor(
  ) { }

  private updateDuration() {
    if (!this.duration) {
      return;
    }

    this.animationElem.nativeElement.style.animationDuration = `${this.duration}s`;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.updateDuration();
  }

}
