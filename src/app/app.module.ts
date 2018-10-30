import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MinutesPipe } from './minutes.pipe';
import { CurrencyFinancePipe } from './currency-finance.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MinutesPipe,
    CurrencyFinancePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
