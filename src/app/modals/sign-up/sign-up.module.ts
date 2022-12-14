import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from "./sign-up.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SpinnerButtonModule} from "../../components/spinner-button/spinner-button.module";


@NgModule({
  declarations: [SignUpComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        SpinnerButtonModule
    ],
  exports: [SignUpComponent]
})
export class SignUpModule {
}
