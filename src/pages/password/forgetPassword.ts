import { Component } from '@angular/core';
import {FormBuilder, FormGroup,  Validators } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'forgetPassword.html'
})
export class ForgetPasswordPage {
  userForm: FormGroup;
  constructor(public navCtrl: NavController, fb: FormBuilder) {
    this.userForm = fb.group({
        email: fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]))
      });
  }
  valid()
  {
    //console.log(this.userForm.value);
    this.navCtrl.push(LoginPage);
      //this.loginService.connect(this.userForm.value).subscribe(() => this.navCtrl.push(TabsPage));
  }
}
