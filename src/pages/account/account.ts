import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {UserService} from '../../app/providers/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'account.html',
  providers: [UserService]
})
export class AccountPage {

  constructor(public navCtrl: NavController, private userService : UserService) {
    this.userService.getCurrUser().then((token) => { console.log(token)});
  }

}
