import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardInMainComponent} from "./product-card-in-main.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {ToCartModule} from "../to-cart/to-cart.module";


@NgModule({
  declarations: [ProductCardInMainComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    ToCartModule
  ],
  exports: [ProductCardInMainComponent]
})
export class ProductCardInMainModule {
}
