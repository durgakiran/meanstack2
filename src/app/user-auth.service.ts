import { Injectable } from '@angular/core';
import { User } from './interfaces/Iuser';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserAuthService {
  user: User;
  constructor(private http: HttpClient) { }

  loginUser(user): Observable<{}> {
    console.log('y');
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<{}>('server/register', user, {headers: headers});
  }
}
