import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from "./banner.component";
import {SwiperModule} from "swiper/angular";


@NgModule({
  declarations: [BannerComponent],
    imports: [
        CommonModule,
        SwiperModule
    ],
  exports: [BannerComponent]
})
export class BannerModule {
}
