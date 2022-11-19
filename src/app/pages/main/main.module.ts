import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main.component";
import {CatalogModule} from "../../components/catalog/catalog.module";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    CatalogModule
  ],
  exports: [MainComponent]
})
export class MainModule {
}
