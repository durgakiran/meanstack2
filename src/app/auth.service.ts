import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  registerUser(user): Observable<{}> {
    console.log('y');
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<{}>('server/register', user, {headers: headers});
  }


}
