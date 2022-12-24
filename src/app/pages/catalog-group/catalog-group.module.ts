import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogGroupComponent} from "./catalog-group.component";
import {ProductCardModule} from "../../components/product-card/product-card.module";


@NgModule({
  declarations: [CatalogGroupComponent],
  imports: [
    CommonModule,
    ProductCardModule
  ]
})
export class CatalogGroupModule {
}
