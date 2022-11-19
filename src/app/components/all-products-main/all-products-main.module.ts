import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllProductsMainComponent} from "./all-products-main.component";
import {ProductCardInMainModule} from "../product-card-in-main/product-card-in-main.module";


@NgModule({
  declarations: [AllProductsMainComponent],
  imports: [
    CommonModule,
    ProductCardInMainModule
  ],
  exports: [AllProductsMainComponent]
})
export class AllProductsMainModule {
}
