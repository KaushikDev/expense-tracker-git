import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  budgetList: { id: number; title: string; amount: number }[] = [
    // { id: 1, title: 'First Budget', amount: 50000 },
    // { id: 2, title: 'Second Budget', amount: 32034 },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.budgetList = JSON.parse(localStorage.getItem('budgetList') || '[]');
  }

  updateAddNewBudgetBtnLabel = () => {
    this.toggleAddNewBudgetBtnLabel = this.toggleNewBudgetForm
      ? 'Hide New Budget'
      : 'Add New Budget';
  };

  toggleNewBugetForm = () => {
    this.toggleNewBudgetForm = !this.toggleNewBudgetForm;
    this.updateAddNewBudgetBtnLabel();
    console.log('The add new budget button was clicked!!');
  };

  saveBudget = () => {
    console.log(`Current budget list length == ${this.budgetList.length}`);
    if (this.newBudgetTitle && this.newBudgetAmount) {
      this.budgetList.push({
        id: this.budgetList.length + 1,
        title: this.newBudgetTitle,
        amount: this.newBudgetAmount,
      });
      localStorage.setItem('budgetList', JSON.stringify(this.budgetList));
      this.postSaveBudget();
    }
  };

  postSaveBudget = () => {
    this.newBudgetAmount = 0;
    this.newBudgetTitle = '';
    this.toggleNewBudgetForm = false;
    this.updateAddNewBudgetBtnLabel();
  };

  viewBudgetPage = (id: number) => {
    this.router.navigate([id], { relativeTo: this.route });
  };
}
