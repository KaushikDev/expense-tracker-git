import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService],
})
export class HeaderComponent implements OnInit {
  btnLabel = '';
  constructor(private router: Router, private user: UserService) {}

  ngOnInit(): void {
    this.btnLabel = this.user.getBtnLabel();
  }

  toggleLogin = () => {
    if (this.user.checkUserExists()) {
      localStorage.clear();
    }
    this.btnLabel = this.user.getBtnLabel();
    this.router.navigate(['/login']);
  };
}
