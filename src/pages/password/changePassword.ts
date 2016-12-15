import { Component } from '@angular/core';
import {FormBuilder, FormGroup,  Validators } from '@angular/forms';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'changePassword.html'
})
export class ChangePasswordPage {
  userForm: FormGroup;
  constructor(public navCtrl: NavController, fb: FormBuilder) {
    this.userForm = fb.group({
        lastPassword: fb.control('', Validators.compose([Validators.required, Validators.minLength(3)])),
        newPassword: fb.control('', [Validators.required, Validators.minLength(3)])
      });
  }
  changePassword()
  {
    console.log(this.userForm.value);
      //this.loginService.connect(this.userForm.value).subscribe(() => this.navCtrl.push(TabsPage));
  }
}
