import { Component, Input } from '@angular/core';

@Component({
  selector: 'xoje-dev-banner',
  template: ` <header>{{ text }}</header>`,
})
export class BannerComponent {
  @Input() text = '';
}
