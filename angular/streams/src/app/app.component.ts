import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Comments </h1>
    <comments></comments>
    <br />
    <load-comments></load-comments>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
