import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsService } from '../investment-results.service';
import { InvestmentData, InvestmentResults } from './investment-calculator.model';
import { AppResultsComponent } from "./app-results/app-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template:`
    <app-header />
    <app-user-input (investmentData)="submitData($event)" />
    @if(isDataAvailable) {
        <app-app-results [results]="investmentResults()" />
      }

    
  `,
  imports: [HeaderComponent, UserInputComponent, AppResultsComponent],
})
export class AppComponent {

  isDataAvailable = false;
  investmentResultsService = inject(InvestmentResultsService); 
  investmentResults =  signal<InvestmentResults[] | undefined>([]);

  submitData(investmentData: InvestmentData) {
    this.investmentResults.set(this.investmentResultsService.calculateInvestmentResults(investmentData));
    this.isDataAvailable = true;
  }
}
