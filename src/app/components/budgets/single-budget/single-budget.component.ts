import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-budget',
  templateUrl: './single-budget.component.html',
  styleUrls: ['./single-budget.component.css'],
})
export class SingleBudgetComponent implements OnInit {
  ID: number = 0;
  singleBudget: { id: number; title: string; amount: number } = {
    id: 0,
    title: 'No title',
    amount: 0,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.ID = this.route.snapshot.params['id'];
  }
}
