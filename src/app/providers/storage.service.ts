import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class StorageService {
  constructor(private storage: Storage) {

    }

    saveUser(user)
    {
       this.storage.set('user', user);
    }
    saveToken(token)
    {
      this.storage.set('token', token);

    }
    getToken()
    {
      return this.storage.get('token');
    }
}
