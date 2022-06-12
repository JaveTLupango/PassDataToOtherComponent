import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MotherCComponent } from './mother-c/mother-c.component';
import { ChildCComponent } from './mother-c/child-c/child-c.component';

@NgModule({
  declarations: [
    AppComponent,
    MotherCComponent,
    ChildCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
