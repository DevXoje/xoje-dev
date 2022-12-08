import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { FormComponent } from './form/form.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerComponent, FormComponent, FieldComponent],
  exports: [BannerComponent, FormComponent, FieldComponent],
})
export class CommonUiModule {}
