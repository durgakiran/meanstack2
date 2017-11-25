import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(public dialogRef: MatDialogRef<LoginFormComponent>) { }
  
  onNoClick(): void {
      console.log('i am called');
      this.dialogRef.close();
  }
  

}
