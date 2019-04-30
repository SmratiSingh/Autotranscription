import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent implements OnInit {
  public username: string = "";
  public name: string = "";
  public new_password: string = "";
  public re_password: string = "";
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  addUser(){

    var usr = new NewUser();

    usr.username = this.username;
    usr.new_password = sha256(this.new_password);
    usr.re_password = sha256(this.re_password);
    usr.first_name = this.name;
    usr.last_name = ' ';

    this.auth.addUser(usr).subscribe(data => {
        if(data['status'] == 'SUCCESS'){
          // this.ngOnInit();
          // console.log('SUCCESS!!!!');
          // console.log(data);
          this.router.navigate(['/landing']);
        }
        else if(data['status'] == 'FAIL'){
          // alert(data.toString());
          console.log('failed');
        }
      })
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