import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styles: [
  ]
})
export class TimerComponent implements OnInit {
  time: Date;

  constructor() {
    this.time = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
   }, 1000);
  }
}
