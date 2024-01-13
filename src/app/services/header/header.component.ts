import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  count:number = 0

  constructor(private sharedSvc:SharedService){
    // this.count = this.sharedSvc.getHotelCount()
  }

ngOnInit(){
  this.sharedSvc.subject$.subscribe((res:any) => {
    this.count = res
    console.log("counter", this.count)
  })
}

}
