import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  // styleUrls: ['./navigation.component.styl']
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navUser: String = '';
  navFirstName: String = '';
  navLastName: String = '';
  constructor() {}

  ngOnInit() {
    
    this.navUser = sessionStorage.getItem('username');
    this.navFirstName = sessionStorage.getItem('firstName');
    this.navLastName = sessionStorage.getItem('lastName');
    console.log('fname: '+this.navFirstName);
  }

  saveDomain() {}
}
