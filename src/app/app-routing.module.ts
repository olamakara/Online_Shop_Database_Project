import { AllProductsComponent } from './all-products/all-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: 'start', component: AllProductsComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }