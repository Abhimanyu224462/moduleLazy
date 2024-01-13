import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {

  constructor(private sharedSvc:SharedService){}
hotelCount:number = 0
  addHotel(){
    this.hotelCount ++
    this.sharedSvc.sendData(this.hotelCount)
  }
  // addHotel(){
  //   this.sharedSvc.addHotel()
  // }

  }

  // subject$ = new Subject()

  // ngOnInit(){
    

  //   this.subject$.subscribe((el:any) => {
  //     console.log("subject data", el)
  //   })

  //   this.subject$.next(15)
  //   this.subject$.next(25)
  // }



