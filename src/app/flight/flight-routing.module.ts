import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './flight.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

const routes: Routes = [
  { path: '', component: FlightComponent }
  // {path:'flight-list', component:FlightListComponent},
  // {path:'flight-details', component:FlightDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
