import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Http,Response, Headers, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  

// import {map} from 'rxjs/operators'
  
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthService {
  username: String = '';
  constructor(private http: Http) { }

  verifyUser(user){
    
    this.username = user.username;
    sessionStorage.setItem('isLoggedIn','true');
    sessionStorage.setItem('username',user.username);
    // return this.http.post('https://localhost:3000/login', user).map((response: Response) =>response.json())
    // return this.http.post('https://webdev.cse.buffalo.edu:3000/login', user).map((response: Response) =>response.json());
    return this.http.post('http://stark.cse.buffalo.edu:3000/login', user).map((response: Response) =>response.json());
  }

  addUser(user){
    // console.log(user);
    this.username = user.username;
    sessionStorage.setItem('isLoggedIn','true');
    sessionStorage.setItem('username',user.username);
    // return this.http.post('https://localhost:3000/signup', user).map((response: Response) =>response.json())    
    // return this.http.post('http://webdev.cse.buffalo.edu:3000/signup', user).map((response: Response) =>response.json());            
    return this.http.post('http://stark.cse.buffalo.edu:3000/signup', user).map((response: Response) =>response.json());              
  }

}
