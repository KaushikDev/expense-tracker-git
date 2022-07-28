import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserExistsService {
  username = '';
  btnLabel = 'Login';
  constructor() {}

  checkUserExists = () => {
    if (localStorage.getItem('user')) {
      return true;
    } else return false;
  };
}
