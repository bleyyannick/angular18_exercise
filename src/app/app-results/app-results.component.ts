import { Component, Input, input } from '@angular/core';
import { InvestmentResults } from '../investment-calculator.model';

@Component({
  selector: 'app-app-results',
  standalone: true,
  imports: [],
  template:`
    <div class="results">
      {{ investmentData.interest }}
      {{investmentData.valueEndOfYear }}
      {{investmentData.totalAmountInvested }}
    </div>
    `,
  styleUrl: './app-results.component.css'
})
export class AppResultsComponent {
  @Input()
  investmentData!: InvestmentResults;
}
