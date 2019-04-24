import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// Class to be implemented for sending info to Node.js
// TODO: Add tag " [(ngModel)] = " in the HTML code
export class NewUser {
  public username:string;
  public new_password:string;
  public re_password:string;
  public first_name:string;
  public last_name:string;
}