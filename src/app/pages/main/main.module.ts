import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main.component";
import {CatalogModule} from "../../components/catalog/catalog.module";
import {AllProductsMainModule} from "../../components/all-products-main/all-products-main.module";
import {BannerModule} from "../../components/banner/banner.module";
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  declarations: [MainComponent],
    imports: [
        CommonModule,
        CatalogModule,
        AllProductsMainModule,
        BannerModule,
        MatRippleModule
    ],
  exports: [MainComponent]
})
export class MainModule {
}
