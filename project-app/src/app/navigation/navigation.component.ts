import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  // styleUrls: ['./navigation.component.styl']
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navUser: String = '';
  constructor() {}

  ngOnInit() {
    
    this.navUser = sessionStorage.getItem('username');
  }

  saveDomain() {}
}
