import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from "./product-card.component";
import {MatButtonModule} from "@angular/material/button";
import {ToCartModule} from "../to-cart/to-cart.module";


@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ToCartModule
  ],
  exports: [ProductCardComponent]
})
export class ProductCardModule {
}
