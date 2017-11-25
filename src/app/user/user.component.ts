import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    user: number = 0;

  constructor() { }

  ngOnInit() {
  }
  userLogin(){
      this.user = 1;
  }
  userLogout(){
      this.user = 0;
  }

}
