import { Component, input } from '@angular/core';
import { InvestmentResults } from '../investment-calculator.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-app-results',
  standalone: true,
  imports: [CurrencyPipe],
  template:`
  @if(results()) {
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Interestment value</th>
          <th>Interest (Year) </th>
          <th>Total interest </th>
          <th>Invested Capital </th>
        </tr>
      </thead>
      <tbody>
        @for(result of results(); track result.year) {
          <tr>
            <td>{{result.year}}</td>
            <td>{{result.valueEndOfYear | currency}}</td>
            <td>{{result.interest | currency}}</td>
            <td>{{result.totalInterest | currency}}</td>
            <td>{{result.totalAmountInvested | currency}}</td>
          </tr>
        }
      </tbody>
    </table>
  } @else {
    <p> No results available </p>
  }
    
    `,
  styleUrl: './app-results.component.css',
})
export class AppResultsComponent {
  results = input<InvestmentResults[] | undefined>();
}
