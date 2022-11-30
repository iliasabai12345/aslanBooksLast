import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
