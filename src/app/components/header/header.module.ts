import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {CityChangeModule} from "../../modals/city-change/city-change.module";
import {MatIconModule} from "@angular/material/icon";
import {SignUpModule} from "../../modals/sign-up/sign-up.module";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    CityChangeModule,
    MatIconModule,
    SignUpModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
