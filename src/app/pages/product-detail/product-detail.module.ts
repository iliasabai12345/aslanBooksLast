import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailComponent} from "./product-detail.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ViewProductModule} from "../../modals/view-product/view-product.module";


@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ViewProductModule
  ],
  exports: [ProductDetailComponent]
})
export class ProductDetailModule {
}
