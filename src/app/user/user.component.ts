import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { User } from '../interfaces/Iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private _UsreAuthService: UserAuthService) { }

  ngOnInit() {
  }
  /* loginUser(): void {
    this._UsreAuthService.loginUser().subscribe(user => this.user = user);
} */
}
