import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  username = '';
  btnLabel = '';

  constructor() {
    // this.checkUserExists();
  }

  checkUserExists = () => (localStorage.getItem('user') ? true : false);

  getBtnLabel = () => (this.checkUserExists() ? 'Logout' : 'Login');
}
