import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksGroupComponent} from "./books-group.component";
import {ProductCardInMainModule} from "../../components/product-card-in-main/product-card-in-main.module";


@NgModule({
  declarations: [BooksGroupComponent],
  imports: [
    CommonModule,
    ProductCardInMainModule
  ],
  exports: [BooksGroupComponent]
})
export class BooksGroupModule {
}
