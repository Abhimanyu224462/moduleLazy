import { Component } from '@angular/core';
import { UserService } from '../userService';

@Component({
  selector: 'app-instance3',
  templateUrl: './instance3.component.html',
  styleUrls: ['./instance3.component.scss']
})
export class Instance3Component {
  userInfo:any
constructor(private userService:UserService){
  

  this.userInfo =  this.userService.getUserInfo()
    console.log("user Info from singleton 3", this.userInfo)
}


}
