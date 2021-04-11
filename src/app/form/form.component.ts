import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../form.service';
import { WeatherDetails } from '../weather-details.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  @Output() detailsEvent = new EventEmitter<WeatherDetails>();
  detailsModel: WeatherDetails = new WeatherDetails();
  isSummaryVisible: boolean = false;

  constructor(private service: FormService) { }

  onFormSubmit(formData: NgForm) {
    const city = formData.form.value['cityInput'];
    const country = formData.form.value['countryInput'];
    const locationDetails = formData.form.value['detailsInput'];
    const details = new WeatherDetails(Date.now(), country, city, locationDetails);
    this.service.addDetailsToHistory(details);
    this.detailsEvent.emit(details);

    // setting summary as visible
    // form visible == summary not visible
    this.isSummaryVisible = true;
  }

  setFormAsVisible(): void {
    // form visible == summary not visible
    this.isSummaryVisible = false;
  }

  ngOnInit(): void {
  }
}
