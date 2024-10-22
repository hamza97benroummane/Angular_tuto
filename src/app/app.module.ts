import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalesPersoneListComponent } from './sales-persone-list/sales-persone-list.component';

@NgModule({
  declarations: [
    AppComponent,
     SalesPersoneListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
