import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Http,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {StorageService} from './storage.service';

const CONTENT_TYPE_HEADER:string = 'Content-Type';
const APPLICATION_JSON:string = 'application/json';

@Injectable()
export class HttpLoginService {
  base_url: string = "https://notificationexample-jordanazoulay.c9users.io/api/";
   urls = {
     connect : this.base_url + "connection",
     disconnect : this.base_url + "user/logout"
   };

   constructor(private http: Http, private storage:StorageService)
   {
     
   }

   connect(ids:any)
   {

     let headers = this.setHeader();
     //let options = new RequestOptions({ headers: headers });
     /*return this.http.post(this.urls.connect, JSON.stringify({email:ids.username,password:ids.password}), options)
            .map(res => res.json())
            .catch(this.handleError);*/
     let requet = this.http.post(this.urls.connect,JSON.stringify({email:ids.username,password:ids.password}), {headers:headers}).map((res) => {

       let loginData:any = res.json();
       this.storage.saveUser(loginData.user);
       this.storage.saveToken(loginData.token);
       //return loginData;
       //setTimeout(
      // this.disconnect(loginData.token).subscribe(), 60000);
/*
    let loginData:any = res.json();
    let user:User = this.readJwt(loginData.token);
    user.username = username;
    user.password = password;

    console.log('Login successful', user);

    if (rememberMe) {
        console.log('Remember me: Store user and jwt to local storage');
        StorageUtils.setAccount(user);
        StorageUtils.setToken(loginData.token);
    }

    return user;*/
  }).catch(this.handleError);
  return requet;


   }
   handleError(error) {
     console.log("error !");
        console.error(error.status);
        return "blabla" ;

    }
   private setHeader()
   {
       let headers = new Headers();
       headers.append(CONTENT_TYPE_HEADER, APPLICATION_JSON);
       return headers;
   }
   private setHeaderWithToken(token)
   {
     let headers = new Headers();
     headers.append(CONTENT_TYPE_HEADER, APPLICATION_JSON);
     headers.append("authorization", token);
     return headers;
   }

   disconnect(token)
   {
     let headers = this.setHeaderWithToken(token);
     return this.http.post(this.urls.disconnect, null, {headers:headers}).map((res) => {
       console.log(res);
     }).catch(this.handleError);


   }
   getUserInfos(token)
   {

   }
}
