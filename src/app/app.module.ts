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
import { HistoryService } from './history.service';
import { WidgetService } from './widget.service';

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
    AppRoutingModule
  ],
  providers: [
    FormService,
    HistoryService,
    WidgetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
