import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ng-marquee',
  templateUrl: './ng-marquee.component.html',
  styleUrls: ['./ng-marquee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgMarqueeComponent implements OnInit {

  @Input() duration: string | number;
  animationElem: HTMLDivElement;

  constructor(
  ) { }

  updateDuration() {
    if (!this.duration) {
      return;
    }
    this.animationElem.style.animationDuration = `${this.duration}s`;
  }

  ngOnInit() {
    this.animationElem = document.querySelectorAll('.ng-marquee-wrapper > div')[0] as HTMLDivElement;
    this.updateDuration();
  }

}
