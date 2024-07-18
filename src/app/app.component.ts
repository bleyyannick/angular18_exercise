import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template:`
    <app-header />
    <app-user-input />
  `,
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {

}
