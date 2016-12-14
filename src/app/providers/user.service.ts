import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';


@Injectable()
export class UserService {
  constructor(private storage: StorageService) {

    }

   getCurrUser()
   {
      return this.storage.getToken();
   }

}
