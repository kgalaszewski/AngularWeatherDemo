import { Component, Input, OnInit } from '@angular/core';
import { WeatherDetails } from '../weather-details.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: [
  ]
})
export class HistoryComponent implements OnInit {

  @Input('history') history: WeatherDetails[];

  constructor() { }

  ngOnInit(): void {
  }

}
