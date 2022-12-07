import { Component } from '@angular/core';

@Component({
  selector: 'xoje-dev-root',
  template: `<!--
<xoje-dev-nx-welcome></xoje-dev-nx-welcome>
-->
    <common-ui-banner title="Welcome to our admin app."></common-ui-banner> `,
})
export class AppComponent {
  title = 'admin';
}
