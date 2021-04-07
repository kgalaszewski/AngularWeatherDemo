import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormService } from './form.service';
import { WeatherDetails } from './weather-details.model';

const numberOfDetailsHistoryToDisplay = 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weatherDetails: WeatherDetails = new WeatherDetails(1, "Poland", "Gdansk", "Pruszcz Gdanski");
  historyDetails: WeatherDetails[] = [];

  constructor(private service: FormService) {
  }

  onFormSubmitted(newDetails: WeatherDetails): void {
    this.historyDetails = this.service.readHistory(numberOfDetailsHistoryToDisplay);
    this.weatherDetails = newDetails;
  }
}
