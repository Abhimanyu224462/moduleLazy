import { Component } from '@angular/core';
import { UserService } from '../userService';

@Component({
  selector: 'app-instance1',
  templateUrl: './instance1.component.html',
  styleUrls: ['./instance1.component.scss']
})
export class Instance1Component {
    userService!:UserService
    userInfo:any
    constructor(){
      this.userService = new UserService()

     this.userInfo =  this.userService.getUserInfo()
      console.log("user Info from singleton", this.userInfo)
    }
}





