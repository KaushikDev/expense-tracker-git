import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comm',
  templateUrl: './comm.component.html',
  styleUrls: ['./comm.component.css'],
})
export class CommComponent implements OnInit {
  @Input() tableData: { client: string; orders: number; views: number }[] = [];
  @Output() tableEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  launchTableEvent(data: any) {
    this.tableEvent.emit(data);
  }
}
