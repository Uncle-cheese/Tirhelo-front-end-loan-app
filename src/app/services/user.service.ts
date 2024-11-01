import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  signUp(data:any) {
    return this.httpClient.post(this.url+
      "/user/signup", data, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }
    )
  }
  
  login(data:any) {
    return this.httpClient.post(this.url+
      "/user/login", data, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }
    )
  }
  forgotPassword(data:any) {
    return this.httpClient.post(this.url+
      "/user/forgotPassword", data, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }
    )
  }
}
