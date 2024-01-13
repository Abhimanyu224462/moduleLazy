import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canAccessGuard } from './canAccess.guard';


const routes: Routes = [
  { path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) },
  
 { path: 'flight', loadChildren: () => import('./flight/flight.module').then(m => m.FlightModule),canLoad:[canAccessGuard] },
  
 { path: 'trains', loadChildren: () => import('./trains/trains.module').then(m => m.TrainsModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
