import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  client: string = 'NO CLIENT TO SHOW!!';
  orders: number = 0;
  views: number = 0;

  constructor(private detailService: DetailService) {
    this.detailService.ob.subscribe((val) => {
      this.client = val.client;
      this.orders = val.orders;
      this.views = val.views;
    });
  }

  ngOnInit(): void {}
}
