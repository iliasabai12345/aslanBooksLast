import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewProductComponent} from "./view-product.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [ViewProductComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ViewProductComponent]
})
export class ViewProductModule {
}
