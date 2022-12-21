import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from "./contacts.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule
  ],
  exports: [
    ContactsComponent
  ]
})
export class ContactsModule {
}
