import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksGroupComponent} from "./books-group.component";
import {ProductCardInMainModule} from "../../components/product-card-in-main/product-card-in-main.module";
import {ProductCardModule} from "../../components/product-card/product-card.module";


@NgModule({
  declarations: [BooksGroupComponent],
  imports: [
    CommonModule,
    ProductCardInMainModule,
    ProductCardModule
  ],
  exports: [BooksGroupComponent]
})
export class BooksGroupModule {
}
