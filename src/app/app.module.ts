import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { WidgetComponent } from './widget/widget.component';
import { FormComponent } from './form/form.component';
import { HistoryComponent } from './history/history.component';
import { SummaryComponent } from './summary/summary.component';
import { FormService } from './form.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    WidgetComponent,
    FormComponent,
    HistoryComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
