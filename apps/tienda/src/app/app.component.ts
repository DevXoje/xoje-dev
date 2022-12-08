import { Component } from '@angular/core';
import { exampleProducts } from '@xoje-dev/products';

@Component({
  selector: 'xoje-dev-root',
  template: `<!--
<xoje-dev-nx-welcome></xoje-dev-nx-welcome>
-->
    <h1>Welcome {{ title }}</h1>
    <xoje-dev-banner title="Welcome to the store!"></xoje-dev-banner>
    <ul>
      <li *ngFor="let product of products">
        <strong>{{ product.name }}</strong> Price: {{ product.price }}
      </li>
    </ul>`,
})
export class AppComponent {
  products = exampleProducts;
  title = 'tienda';
}
