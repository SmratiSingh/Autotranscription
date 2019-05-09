// Sites referred:
// https://www.c-sharpcorner.com/article/angular-5-crud-opration-using-nodeexpressmongo/
// https://code.tutsplus.com/tutorials/creating-a-blogging-app-using-angular-mongodb-home--cms-30129

import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
// import {Http,Response, Headers, RequestOptions } from '@angular/http';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.styl']
})

export class SigninComponent implements OnInit {
  public email: string = "";
  public password: string = "";
  public errorMsg: string = "";
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    console.log(this.email);
  }
  
  authUser(){

    if(this.email==""||this.password==""){
      this.errorMsg = "Plese enter all fields."
        return 0;
    }

    var usr = new User();

    usr.username = this.email;
    
    usr.password = sha256(this.password);
    console.log(usr);
    this.auth.verifyUser(usr).subscribe(data => {
        if(data['status'] == 'SUCCESS'){
          // this.ngOnInit();
          // console.log('SUCCESS!!!!');
          // console.log(data);
          sessionStorage.setItem('firstName',data['data']['firstName']);
          sessionStorage.setItem('lastName',data['data']['lastName']);
          this.router.navigate(['/landing']);
        }
        else if(data['status'] == 'FAIL'){
          alert(data.toString());

        }
      })
    // if(this.password=='timepass'){
    //   console.log(this.email);
    //   console.log(this.password);
    //   this.router.navigate(['/landing']);     
    // }
  }
}
export class User {
  public username:string;
  public password:string;
}
