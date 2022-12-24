import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalSearchComponent} from "./global-search.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [GlobalSearchComponent],
    imports: [
        CommonModule,
        MatProgressBarModule
    ],
  exports: [GlobalSearchComponent]
})
export class GlobalSearchModule {
}
