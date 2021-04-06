import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styles: [
  ]
})
export class WidgetComponent implements OnInit {

  constructor(service: WidgetService) { }

  ngOnInit(): void {
  }

}
