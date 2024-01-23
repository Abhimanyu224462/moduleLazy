import { Component } from '@angular/core';
import { UserService } from '../userService';

@Component({
  selector: 'app-instance2',
  templateUrl: './instance2.component.html',
  styleUrls: ['./instance2.component.scss']
})
export class Instance2Component {
  userService!:UserService
  userInfo:any
  constructor(){
    this.userService = new UserService()

   this.userInfo =  this.userService.getUserInfo()
    console.log("user Info from singleton 2", this.userInfo)
  }
  }
