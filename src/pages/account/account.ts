import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {UserService} from '../../app/providers/user.service';
import {ChangePasswordPage} from '../password/changePassword';

@Component({
  selector: 'page-home',
  templateUrl: 'account.html',
  providers: [UserService]
})
export class AccountPage {
   origin_src:string = "https://notificationexample-jordanazoulay.c9users.io";
   user:any = null;


  constructor(public navCtrl: NavController, private userService : UserService) {
    this.userService.getCurrUser((user) => {this.user = user ;console.log(user, "i'mhere");});//.then((token) => { console.log(token)});
  }
  changePassword()
  {
     this.navCtrl.push(ChangePasswordPage);
  }

}
