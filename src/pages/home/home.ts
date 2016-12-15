import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {SendOrderPage} from '../order/sendOrder';
import {ValidOrderPage} from '../order/validOrder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  sendOrder()
  {
    this.navCtrl.push(SendOrderPage);
  }
  validOrder()
  {
    this.navCtrl.push(ValidOrderPage);
  }

}
