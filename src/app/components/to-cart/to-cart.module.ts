import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToCartComponent} from "./to-cart.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [ToCartComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [ToCartComponent]
})
export class ToCartModule {
}
