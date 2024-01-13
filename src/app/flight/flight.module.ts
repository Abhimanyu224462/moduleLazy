import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightComponent } from './flight.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';


@NgModule({
  declarations: [
    FlightComponent,
    FlightListComponent,
    FlightDetailsComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule
  ],
  exports: [
    FlightDetailsComponent,
    FlightListComponent
    
  ]
})
export class FlightModule { }
