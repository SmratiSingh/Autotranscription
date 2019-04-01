import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(uname, pwd) {
    return this.http.post('/app/auth.js', {
      uname,
      pwd
    })
    // }).subscribe(data => {
    //   console.log(data, " -> acquired")
    // })
  }

}
