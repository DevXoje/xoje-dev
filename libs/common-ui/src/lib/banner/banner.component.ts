import { Component, Input } from '@angular/core';

@Component({
  selector: 'xoje-dev-banner',
  template: ` <header>{{ text }}</header>`,
  styles: [
    `
      .container {
        color: rgb(182, 0, 0);
      }
    `,
  ],
})
export class BannerComponent {
  @Input() text = '';
}
