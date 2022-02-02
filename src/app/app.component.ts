import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h3>Hello world
  <b>HI</b>
  </h3><app-child></app-child>`,
  styles: [`h3
  {
    color:blue;
  }`]
})
export class AppComponent {
  title = 'myfirstapp';
}
