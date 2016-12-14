import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';

import {HttpLoginService} from './providers/login.service';
import {StorageService} from './providers/storage.service';
import {UserService} from './providers/user.service';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '9bc47ad4',
  },
  'push': {
    'sender_id': '516056839802',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    AccountPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom',
      platforms: {
        ios: {
          tabsPlacement: 'top',
        }}}),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    AccountPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, HttpLoginService, StorageService,  Storage,UserService]
})
export class AppModule {}
