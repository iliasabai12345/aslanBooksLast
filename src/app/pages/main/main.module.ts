import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main.component";
import {CatalogModule} from "../../components/catalog/catalog.module";
import {AllProductsMainModule} from "../../components/all-products-main/all-products-main.module";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    CatalogModule,
    AllProductsMainModule
  ],
  exports: [MainComponent]
})
export class MainModule {
}
