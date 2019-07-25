import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // define created components
  ],
  imports: [
    BrowserModule,  // define modules
    AppRoutingModule
  ],
  providers: [], // define services
  bootstrap: [AppComponent] // This is start component
})
export class AppModule { }
