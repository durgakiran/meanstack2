import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    currentStatus: string = 'Login';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  loginUserForm(): void{
      let dialogRef = this.dialog.open(LoginFormComponent,{width: '400px'});
      dialogRef.afterOpen().subscribe(result => {
          console.log('I am openend');
      })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
      
  }

}
