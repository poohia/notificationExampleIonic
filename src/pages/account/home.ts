import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AccountPage}    from './account';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomeAccountPage {

  constructor(public navCtrl: NavController) {

  }
  parametre()
  {
    this.navCtrl.push(AccountPage);
  }
}
