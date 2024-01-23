import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  // hotelCounter:number = 6

  // addHotel(){
  //   this.hotelCounter ++
  //   console.log(this.hotelCounter)
  // }

  // getHotelCount(){
  //   return this.hotelCounter
  // }


  // Behavior Subject ===========================================

  // subject$ = new BehaviorSubject(9)

  subject$ = new Subject()

  sendData(data:any){
    this.subject$.next(data)
  }

}


