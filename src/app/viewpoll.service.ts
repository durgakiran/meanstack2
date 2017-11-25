import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Poll, polls } from './mockdata/polls';

@Injectable()
export class ViewpollService {

  constructor() { }
  
  getPolls(): Observable<Poll[]>{
      return of(polls);
  }

}
