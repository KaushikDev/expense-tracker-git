import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [],
})
export class LoginComponent implements OnInit {
  username: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  doSomething = () => {
    if (this.username) {
      localStorage.setItem('user', this.username);
      this.router.navigate(['/home']);
    }
  };
}
