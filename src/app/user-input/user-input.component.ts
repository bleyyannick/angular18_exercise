import { Component, output, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  template: ` 
   <form (ngSubmit)="onSubmit(investForm)" #investForm="ngForm">
    <div class="input-group">
      <p>
        <label for="initial-investment">Initial investment</label>
        <input 
            id="initial-investment" 
            type="number" 
            [(ngModel)]="initalInvestment"
            name="initial-investment" />
      </p>
      <p>
        <label for="annual-investment">Annual investment</label>
        <input 
          id="annual-investment" 
          type="number" 
          [(ngModel)]="annualInvestment"
          name="annual-investment" />
      </p>
    </div>
    <div class="input-group">
      <p>
        <label for="expected-return">Expected return</label>
        <input 
          id="expected-return" 
          type="number" 
          [(ngModel)]="expectedReturn"
          name="expected-return" />
      </p>
      <p>
        <label for="duration">Duration</label>
        <input 
           id="duration" 
           type="number" 
           [(ngModel)]="duration"
           name="duration"/>
      <p>
    </div>
    <button type="submit">Calculate</button>
  </form>  
  `,
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

   investmentData = output<{
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
   }>()

   initalInvestment = signal('0'); 
   annualInvestment = signal('0');
   expectedReturn = signal('5');
   duration = signal('10');

  onSubmit(form: NgForm) {
    this.investmentData.emit({
      initialInvestment: +this.initalInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    });
    form.reset();
  }
  
}

 
