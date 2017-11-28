import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { MatDialogRef } from '@angular/material';
import { UserAuthService } from '../user-auth.service';
import { User } from '../interfaces/Iuser';
import { RegisterformComponent } from '../registerform/registerform.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent {
    
  email: String;
  password: String;
  constructor(/* public dialogRef: MatDialogRef<LoginFormComponent>, */ private _UsreAuthService: UserAuthService,private router: Router) {
      
  }
  /* onNoClick(): void {
      console.log('i am called');
      this.dialogRef.close();
  } */
  onSubmit(): void {
    const user = {
      email: this.email,
      password: this.password
    };
    this._UsreAuthService.loginUser(user).subscribe(data => {
      if(data.status){
          this._UsreAuthService.changeLoginStatus(true);
          this.router.navigate(['/viewpoll']);
      }
    });
  }

}
