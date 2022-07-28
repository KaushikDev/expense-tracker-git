import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  checkUserExists: boolean = false;
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.checkUserExists = true;
    }
  }
}
