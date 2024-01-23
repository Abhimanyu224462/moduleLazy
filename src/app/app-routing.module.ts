import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canAccessGuard } from './canAccess.guard';
import { TestComponent } from './test/test.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';


const routes: Routes = [
  { path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) },
  
 { path: 'flight', loadChildren: () => import('./flight/flight.module').then(m => m.FlightModule),canLoad:[canAccessGuard] },
  
 { path: 'trains', loadChildren: () => import('./trains/trains.module').then(m => m.TrainsModule) },

 {path:'test',component:TestComponent},
 {path:'create-booking', component:CreateBookingComponent},
 {path:'booking-list', component:BookingListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
