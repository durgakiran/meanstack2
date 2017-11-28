import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { LoginFormComponent } from '../login-form/login-form.component';
//import { MatDialog, MatDialogRef } from '@angular/material';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    view: Boolean;
  constructor(/* public dialog: MatDialog */private _userAuthService: UserAuthService) {
      this.view = false;
  }
 

  ngOnInit() {
      this._userAuthService.currentLoginStatus.subscribe(status => this.view = status);
  }
  /* loginUserForm(): void {
      let dialogRef = this.dialog.open(LoginFormComponent, {width: '400px'});
      dialogRef.afterOpen().subscribe(result => {
          console.log('I am openend');
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  } */

}
