import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
    
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target

    // const uname = target.getElementById("username")
    // const pwd = target.getElementById("password")

    const uname = target.querySelector("#username").value
    const pwd = target.querySelector("#password").value

    // this.Auth.getUserDetails(uname, pwd).subscribe(data => {
    //   if(data.success){
    //     console.log("Got it")
    //   }else {
    //     window.alert("fail.")
    //   }
    // })

    console.log(uname, pwd)
  }

}
