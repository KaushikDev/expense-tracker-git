import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css'],
})
export class BudgetsComponent implements OnInit {
  toggleNewBudgetForm = false;
  toggleAddNewBudgetBtnLabel = 'Add New Budget';
  newBudgetTitle = '';
  newBudgetAmount: number = 0;
  newBudgetId = Math.floor(Math.random() + 1);

  budgetList = [
    { id: this.newBudgetId, title: 'First Budget', amount: 50000 },
    { id: this.newBudgetId, title: 'Second Budget', amount: 32034 },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleNewBugetForm = () => {
    this.toggleNewBudgetForm = !this.toggleNewBudgetForm;
    this.toggleAddNewBudgetBtnLabel = !this.toggleNewBudgetForm
      ? 'Add New Budget'
      : 'Hide New Budget';
    console.log('The add new budget button was clicked!!');
  };

  saveBudget = () => {
    console.log('New Budget has been saved!!');
    this.budgetList.push({
      id: this.newBudgetId,
      title: this.newBudgetTitle,
      amount: this.newBudgetAmount,
    });
    this.postSaveBudget();
  };

  postSaveBudget = () => {
    this.newBudgetAmount = 0;
    this.newBudgetTitle = '';
    this.toggleNewBudgetForm = false;
  };

  viewBudgetPage = (id: number) => {
    this.router.navigate([`/${id}`]);
  };
}
