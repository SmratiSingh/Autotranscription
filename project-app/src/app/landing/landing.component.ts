import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  landingUser: String = '';
  constructor(private auth: AuthService, private rout: Router) { }

  ngOnInit() {
    // console.log('inside landing ts');
    this.landingUser = localStorage.getItem('username');
    console.log(localStorage.getItem('isLoggedIn'));
    if(localStorage.getItem('isLoggedIn') != 'true'){
      this.rout.navigate(['/']);
    }
  }
  invalidate(){
    localStorage.setItem('isLoggedIn','false');
    localStorage.clear();
  }
}
