import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  constructor(private authService: AuthService) { }
  ngOnInit() {
  }
  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };
    console.log('x');
    this.authService.registerUser(user).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

}
