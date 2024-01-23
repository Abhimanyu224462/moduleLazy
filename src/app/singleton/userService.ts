import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})



export class UserService {
   
   
    getUserInfo(){

        const userInfo = {
            "userName": "Suphie",
            "email" : "abhch@gmail.com",
            "mobile" : 645545454,
            "FullName": "Suphiyana"
        }
        return userInfo
    }
}