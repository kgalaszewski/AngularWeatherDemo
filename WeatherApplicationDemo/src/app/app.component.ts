import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("myHe") inputElement: ElementRef;

  onChange(value: string): void {
    this.inputElement.nativeElement.value = value;
  }
}
