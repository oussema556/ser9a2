import { User } from './../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }


  public login(user: User){
    return this.http.post("http://localhost:8080/login",user,{responseType: 'text' as 'json'})
  }

  public register(user: User){
    return this.http.post("http://localhost:8080/login",user,{responseType:'text' as 'json'})
  }
}
