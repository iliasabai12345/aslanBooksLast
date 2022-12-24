import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogComponent} from "./catalog.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [CatalogComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [CatalogComponent]
})
export class CatalogModule {
}
