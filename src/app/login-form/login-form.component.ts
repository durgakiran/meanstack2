import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
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
  constructor(/* public dialogRef: MatDialogRef<LoginFormComponent>, */ private _UsreAuthService: UserAuthService) { }
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
      console.log(JSON.stringify(data));
    });
  }

}
