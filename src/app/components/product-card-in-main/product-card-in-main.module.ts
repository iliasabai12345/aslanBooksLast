import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardInMainComponent} from "./product-card-in-main.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [ProductCardInMainComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [ProductCardInMainComponent]
})
export class ProductCardInMainModule {
}
