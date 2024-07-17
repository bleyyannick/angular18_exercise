import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template:`
    <app-header />
  `,
  imports: [HeaderComponent],
})
export class AppComponent {

}
