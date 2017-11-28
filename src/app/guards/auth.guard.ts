import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: UserAuthService) {}

  canActivate() {
     this.authService.isLoggedIn().subscribe(data => {
        console.log(data.status);
      return data.status;
    });
    return false;
  }
}