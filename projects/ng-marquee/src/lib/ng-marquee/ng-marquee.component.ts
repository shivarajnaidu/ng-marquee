import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-marquee',
  templateUrl: './ng-marquee.component.html',
  styleUrls: ['./ng-marquee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgMarqueeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
