import { Injectable } from '@angular/core';
import { WeatherDetails } from './weather-details.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private detailsHistory: WeatherDetails[] = [];

  constructor() { }

  addDetailsToHistory(details: WeatherDetails): void {
    this.detailsHistory.push(details);
  }

  readHistory(numberOfRows: number): WeatherDetails[] {
    const startingElement: number = this.detailsHistory.length - numberOfRows;
    const firstElementToShow: number = startingElement < 0 ? 0 : startingElement;
    return this.detailsHistory.slice(firstElementToShow).reverse();
  }
}
