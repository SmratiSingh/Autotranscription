import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Http,Response, Headers, RequestOptions } from '@angular/http'; 

import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  

// import {map} from 'rxjs/operators'
  
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  verifyUser(user){      
    return this.http.post('http://localhost:3000/login', user).map((response: Response) =>response.json())              
  }

}
