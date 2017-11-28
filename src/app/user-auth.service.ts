import { Injectable } from '@angular/core';
import { User } from './interfaces/Iuser';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserAuthService {
  constructor(private http: HttpClient) { }

private loginStatus = new BehaviorSubject<boolean>(false);
  currentLoginStatus = this.loginStatus.asObservable();
  
  loginUser(user): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<{}>('server/login', user, {headers: headers});
  }
  isLoggedIn(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<{}>('/server/authenticateuser',{headers: headers});
  }
  
  changeLoginStatus(status: boolean){
      this.loginStatus.next(status);
  }
}
