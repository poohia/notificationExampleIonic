import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import {Http,Headers,RequestOptions} from '@angular/http';

const CONTENT_TYPE_HEADER:string = 'Content-Type';
const APPLICATION_JSON:string = 'application/json';

@Injectable()
export class UserService {
  base_url: string = "https://notificationexample-jordanazoulay.c9users.io/api/";
   urls = {
     getUser : this.base_url + "user/infos",
     changePassword : this.base_url ,
   };
  constructor(private storage: StorageService, private  http: Http) {

    }

   getCurrUser(callback)
   {
        return this.storage.getToken((token) => {
       //  console.log(token["__zone_symbol__value"]);
         let header = this.setHeaderWithToken(token);
         return this.http.get(this.urls.getUser,  {headers : header }).map((res) => {
           return res.json();
         }).catch(this.handleError).subscribe((user) => callback(user));
       });

   }

   changePassword(callback)
   {
     return this.storage.getToken((token) => {
    //  console.log(token["__zone_symbol__value"]);
      let header = this.setHeaderWithToken(token);
      return this.http.post(this.urls.getUser,  {headers : header }).map((res) => {
        return res.json();
      }).catch(this.handleError).subscribe((user) => callback(user));
    });
   }

   private setHeaderWithToken(token)
   {
     let headers = new Headers();
     headers.append(CONTENT_TYPE_HEADER, APPLICATION_JSON);
     headers.append("authorization", token);
     return headers;
   }

   private handleError(error) {
     console.log("error !");
        console.error(error.status);
        return "blabla" ;

    }
}
