import { Component, Input, OnInit } from '@angular/core';
import { WeatherDetails } from '../weather-details.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styles: [
  ]
})
export class WidgetComponent implements OnInit {
  @Input() weatherInfo: WeatherDetails;
  lastInfo: WeatherDetails = new WeatherDetails(1, "Poland", "Gdansk", "Pruszcz Gdanski");
  cityImageAdress: string = "https://zielonamapa.pl/wp-content/uploads/2020/10/gdansk-5-500x333.jpg";

  constructor() { }

  listenToWeatherInfo(): void {
    // check if during last 5 seconds new
    // weather location was requested
    setInterval(() => {
      if (this.lastInfo.city != this.weatherInfo.city
        || this.lastInfo.country != this.weatherInfo.country
        || this.lastInfo.locationDetails != this.weatherInfo.locationDetails)
        {
          this.lastInfo = this.weatherInfo;
          this.callWeatherApi();
        }
    }, 2000);
  }

  updateImageSource(): void {
    // todo implement and move to widget service
  }

  callWeatherApi(): void {
    alert("Oooo Yeaaa!"); // todo implement real api call
    // todo move to widget service
  }

  onWidgetRefresh(): void {
    this.callWeatherApi();
  }

  ngOnInit(): void {
    this.listenToWeatherInfo();
  }
}
