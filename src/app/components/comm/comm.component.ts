import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comm',
  templateUrl: './comm.component.html',
  styleUrls: ['./comm.component.css'],
})
export class CommComponent implements OnInit {
  @Input() title = '';
  @Input() message = '';
  @Input() tableData: { client: string; orders: number; views: number }[] = [];
  @Output() childEvent = new EventEmitter();
  @Output() tableEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  logThisInParentComp() {
    this.childEvent.emit(this.message);
  }

  launchTableEvent(data: any) {
    this.tableEvent.emit(data);
  }
}
