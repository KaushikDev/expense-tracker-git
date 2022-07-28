import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      console.log('value exists', localStorage.getItem('user'));
      this.router.navigate(['/home']);
    } else {
      console.log("value doesn't exists");
    }
  }

  doSomething = () => {
    localStorage.setItem('user', this.username);
    localStorage.getItem('user');
    this.router.navigate(['/home']);
  };
}
