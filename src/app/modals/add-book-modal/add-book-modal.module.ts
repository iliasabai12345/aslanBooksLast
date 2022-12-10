import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddBookModalComponent} from "./add-book-modal.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {SpinnerButtonModule} from "../../components/spinner-button/spinner-button.module";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddBookModalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    SpinnerButtonModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AddBookModalComponent]
})
export class AddBookModalModule {
}
