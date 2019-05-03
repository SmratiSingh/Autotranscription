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
  username: String = 'harshal';
  constructor(private http: Http) { }

  verifyUser(user){
    console.log(user);      
    // return this.http.post('https://localhost:3000/login', user).map((response: Response) =>response.json())              
    return this.http.post('http://stark.cse.buffalo.edu:3000/login', user).map((response: Response) =>response.json())              
  }

  addUser(user){
    // console.log(user);
    // return this.http.post('https://localhost:3000/signup', user).map((response: Response) =>response.json())              
    return this.http.post('http://stark.cse.buffalo.edu:3000/signup', user).map((response: Response) =>response.json())              
  }

}
