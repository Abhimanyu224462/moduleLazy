import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Module } from './test1/test1.module';
import { FlightModule } from './flight/flight.module';
import { HotelsModule } from './hotels/hotels.module';
import { TrainsModule } from './trains/trains.module';



@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Test1Module,
    FlightModule,
    HotelsModule,
    TrainsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
