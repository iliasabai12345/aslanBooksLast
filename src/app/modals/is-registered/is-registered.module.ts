import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IsRegisteredComponent} from "./is-registered.component";


@NgModule({
  declarations: [IsRegisteredComponent],
  imports: [
    CommonModule
  ],
  exports: [IsRegisteredComponent]
})
export class IsRegisteredModule {
}
