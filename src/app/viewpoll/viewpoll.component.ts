import { Component, OnInit } from '@angular/core';
import { Poll } from '../mockdata/polls';
import { ViewpollService } from '../viewpoll.service';

@Component({
  selector: 'app-viewpoll',
  templateUrl: './viewpoll.component.html',
  styleUrls: ['./viewpoll.component.css']
})
export class ViewpollComponent implements OnInit {
    polls: Poll[];
  constructor(private _ViewPollService: ViewpollService) { }

  ngOnInit() {
      this.getPolls();
  }
  getPolls(): void{
      this._ViewPollService.getPolls().subscribe(polls=>this.polls=polls);
  }

}
