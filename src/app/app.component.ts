import { Component } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User = new User()
constructor(private router:Router,private userService:UserServiceService){}

  title = 'AtpNewsIndia';
  id='2311'
  iframeID='4323'
  iframeUrl='https://angular.io'

  addUser(){
    console.log("button clicked "+this.user.id+" "+this.user.iframeId+" "+this.user.iframeUrl);
    this.userService.addUser(this.user).subscribe(data=>{
      console.log("added successfully!!")
    });

  }
}
