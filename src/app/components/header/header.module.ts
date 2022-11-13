import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {CityChangeModule} from "../../modals/city-change/city-change.module";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    CityChangeModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
