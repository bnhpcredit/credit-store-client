import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {
  today = new Date().toDateString();
  constructor() { }

  ngOnInit(): void {

  }

}
