import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
   <header>
     <img [src]="logoPath" alt="" />
     <h1>Investment calculator</h1>
  </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   
  get logoPath() {
    return 'investment-calculator-logo.png';
  }
}
