import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  title = 'We would love to hear from you';
  message =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

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

  constructor() {}

  ngOnInit(): void {}

  showMessageInConsole(event: any) {
    console.log(event);
  }
  showTableDataEmittedFromChild(event: any) {
    console.log(event);
  }
}
