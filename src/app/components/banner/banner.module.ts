import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from "./banner.component";
import {SwiperModule} from "swiper/angular";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [BannerComponent],
    imports: [
        CommonModule,
        SwiperModule,
        RouterModule
    ],
  exports: [BannerComponent]
})
export class BannerModule {
}
