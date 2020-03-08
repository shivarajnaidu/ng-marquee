import { Component, OnInit, ChangeDetectionStrategy, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

enum MarqueeDirection {
  left = 'left',
  right = 'right',
  alternate = 'alternate'
}

@Component({
  selector: 'ng-marquee',
  templateUrl: './ng-marquee.component.html',
  styleUrls: ['./ng-marquee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgMarqueeComponent implements OnInit {

  @Input() speed: string | number;
  @Input() direction: MarqueeDirection;

  marqueeDirection = MarqueeDirection;

  ngOnInit() {
  }
}
