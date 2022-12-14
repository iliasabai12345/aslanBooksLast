import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {BooksGroupComponent} from "./pages/books-group/books-group.component";
import {CatalogGroupComponent} from "./pages/catalog-group/catalog-group.component";

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'compilation/:id', component: BooksGroupComponent},
  {path: 'catalog-group/:id', component: CatalogGroupComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
