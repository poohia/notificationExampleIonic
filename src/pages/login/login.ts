import { Component } from '@angular/core';
import {FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import {HttpLoginService} from '../../app/providers/login.service';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
  providers: [HttpLoginService]
})
export class LoginPage {
  userForm: FormGroup;
  constructor(public navCtrl: NavController, fb: FormBuilder, ls: HttpLoginService, private loginService:HttpLoginService) {
    this.userForm = fb.group({
        username: fb.control('', Validators.compose([Validators.required, Validators.minLength(3)])),
        password: fb.control('', Validators.required)
      });
  }
  login()
  {
     //console.log(this.userForm.value);
     this.loginService.connect(this.userForm.value).subscribe(() => this.navCtrl.push(TabsPage));
  }
}
