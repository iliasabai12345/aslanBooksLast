import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CityChangeComponent} from "./city-change.component";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";
import {MatRippleModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { CityChangeFilterPipe } from './city-change-filter.pipe';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [CityChangeComponent, CityChangeFilterPipe],
    imports: [
        CommonModule,
        MatRadioModule,
        MatListModule,
        MatRippleModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
  exports: [CityChangeComponent]
})
export class CityChangeModule {
}
