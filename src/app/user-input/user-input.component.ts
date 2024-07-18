import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  template: ` 
   <form (ngSubmit)="onSubmit()">
    <div class="input-group">
      <p>
        <label for="initial-investment">Initial investment</label>
        <input id="initial-investment" type="number" />
      </p>
      <p>
        <label for="annual-investment">Annual investment</label>
        <input id="annual-investment" type="number" />
      </p>
    </div>
    <div class="input-group">
      <p>
        <label for="expected-return">Expected return</label>
        <input id="expected-return" type="number" />
      </p>
      <p>
        <label for="duration">Duration</label>
        <input id="duration" type="number"/>
      <p>
    </div>
    <button type="submit">Calculate</button>
  </form>  
  `,
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

   initalInvestment = '0'; 
    annualInvestment = '0';
    expectedReturn = '5';
    duration = '10'

  onSubmit() {
    console.log('Form submitted');
  }


}
