import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  landingUser: String = '';
  constructor(private auth: AuthService) { }

  ngOnInit() {
    // console.log('inside landing ts');
    this.landingUser = this.auth.username;
    console.log(this.landingUser);
  }
}
