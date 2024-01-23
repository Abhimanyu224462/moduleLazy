import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Module } from './test1/test1.module';
import { FlightModule } from './flight/flight.module';
import { HotelsModule } from './hotels/hotels.module';
import { TrainsModule } from './trains/trains.module';
import { HeaderComponent } from './services/header/header.component';
import { FooterComponent } from './services/footer/footer.component';
import { Instance1Component } from './singleton/instance1/instance1.component';
import { Instance2Component } from './singleton/instance2/instance2.component';
import { Instance3Component } from './singleton/instance3/instance3.component';
import { Instance4Component } from './singleton/instance4/instance4.component';
import { UserService } from './singleton/userService';
import { TestComponent } from './test/test.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Instance1Component,
    Instance2Component,
    Instance3Component,
    Instance4Component,
    TestComponent,
    BookingListComponent,
    CreateBookingComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Test1Module,
    FlightModule,
    HotelsModule,
    TrainsModule,
    ReactiveFormsModule
  ],
  providers: [],
  // providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
