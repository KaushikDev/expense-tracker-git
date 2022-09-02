import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  tableData: { client: string; orders: number; views: number }[] = [
    { client: 'abc', orders: 323, views: 92 },
    { client: 'def', orders: 123, views: 94 },
    { client: 'ghi', orders: 313, views: 95 },
    { client: 'jkl', orders: 321, views: 91 },
    { client: 'mno', orders: 223, views: 98 },
    { client: 'pqr', orders: 322, views: 99 },
    { client: 'stu', orders: 233, views: 93 },
    { client: 'vwx', orders: 343, views: 97 },
    { client: 'yz', orders: 353, views: 90 },
  ];

  constructor(private router: Router, private detailService: DetailService) {}

  ngOnInit(): void {}

  showTableDataEmittedFromChild(event: any) {
    this.router.navigate(['/details']);
    this.detailService.ob.next(event);
    // console.log(event);
  }
}
