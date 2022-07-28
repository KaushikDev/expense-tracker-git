import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserExistsService } from 'src/app/services/user-exists.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  btnLabel = '';
  constructor(private router: Router, private userExists: UserExistsService) {}

  ngOnInit(): void {
    if (this.userExists.checkUserExists()) {
      this.btnLabel = this.userExists.btnLabel;
    } else this.btnLabel = this.userExists.btnLabel;
  }

  toggleLogin = () => {
    if (this.userExists.checkUserExists()) {
      this.btnLabel = this.userExists.btnLabel;
      this.router.navigate(['/']);
    } else {
      localStorage.removeItem('user');
      this.btnLabel = this.userExists.btnLabel;
      this.router.navigate(['/']);
    }
  };
}
