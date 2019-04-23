import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.styl']
})
export class SigninComponent implements OnInit {
  public email: string = "";
  public password: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.email);
  }
  
  authUser(){
    console.log('hitting');
    if(this.password=='timepass'){
      console.log(this.email);
      console.log(this.password);
      this.router.navigate(['/landing']);
      
    }
  }
}
