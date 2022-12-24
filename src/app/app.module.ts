import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getFunctions, provideFunctions} from '@angular/fire/functions';
import {getMessaging, provideMessaging} from '@angular/fire/messaging';
import {getPerformance, providePerformance} from '@angular/fire/performance';
import {getRemoteConfig, provideRemoteConfig} from '@angular/fire/remote-config';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {HeaderModule} from "./components/header/header.module";
import {FooterModule} from "./components/footer/footer.module";
import {MainModule} from "./pages/main/main.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ProductDetailModule} from "./pages/product-detail/product-detail.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {BooksGroupModule} from "./pages/books-group/books-group.module";
import { IsRegisteredComponent } from './modals/is-registered/is-registered.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    IsRegisteredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    HeaderModule,
    FooterModule,
    MainModule,
    MatSnackBarModule,
    ProductDetailModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      useDefaultLang: false
    }),
    MatProgressBarModule,
    BooksGroupModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
