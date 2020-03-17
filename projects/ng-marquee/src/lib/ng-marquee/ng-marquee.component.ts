import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

enum MarqueeDirection {
  left = 'left',
  right = 'right',
  alternate = 'alternate'
}

enum MarqueeSpeed {
  drowsy = 'drowsy',
  slow = 'slow',
  normal = 'normal',
  fast = 'fast',
  swift = 'swift',
  hyper = 'hyper',
}

@Component({
  selector: 'ng-marquee',
  templateUrl: './ng-marquee.component.html',
  styleUrls: ['./ng-marquee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgMarqueeComponent implements OnInit {

  @Input() speed: string;
  @Input() duration: string;
  @Input() direction: MarqueeDirection;
  @Input() stopOnHover = false;

  marqueeDirection = MarqueeDirection;
  marqueeSpeed = MarqueeSpeed;

  ngOnInit() {
  }
}
