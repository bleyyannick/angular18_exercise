import { Component, inject } from '@angular/core';
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
      @for (investmentResult of investmentResults; track investmentResult.year) {
        <app-app-results [investmentData]="investmentResult" />
      }
    }

    
  `,
  imports: [HeaderComponent, UserInputComponent, AppResultsComponent],
})
export class AppComponent {

  isDataAvailable = false;
  investmentResultsService = inject(InvestmentResultsService); 
  investmentResults: InvestmentResults[] = []

  submitData(investmentData: InvestmentData) {
    this.investmentResults = this.investmentResultsService.calculateInvestmentResults(investmentData);
    this.isDataAvailable = true;
  }
}
