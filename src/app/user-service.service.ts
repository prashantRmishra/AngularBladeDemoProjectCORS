import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http:HttpClient) {
    
  }
  private userUrl ='/api';

  public addUser(user){
    console.log("from service:  "+user.id+" "+user.iframeId+" "+user.iframeUrl);
    return this.http.post<User>(this.userUrl,user);
  }
}
