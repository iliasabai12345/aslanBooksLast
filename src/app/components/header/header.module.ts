import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {CityChangeModule} from "../../modals/city-change/city-change.module";
import {MatIconModule} from "@angular/material/icon";
import {SignUpModule} from "../../modals/sign-up/sign-up.module";
import {SignInModule} from "../../modals/sign-in/sign-in.module";
import {FormsModule} from "@angular/forms";
import {AddBookModalModule} from "../../modals/add-book-modal/add-book-modal.module";
import {ContactsModule} from "../../pages/contacts/contacts.module";
import {RouterModule} from "@angular/router";
import {GlobalSearchModule} from "../global-search/global-search.module";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    CityChangeModule,
    MatIconModule,
    SignUpModule,
    SignInModule,
    FormsModule,
    AddBookModalModule,
    ContactsModule,
    RouterModule,
    GlobalSearchModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
