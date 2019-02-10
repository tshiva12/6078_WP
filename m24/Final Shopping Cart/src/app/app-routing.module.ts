import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProductCatalogComponent} from './product-catalog/product-catalog.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {UserAccountComponent} from './user-account/user-account.component';
const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'productCatalog/:searchedData', component:ProductCatalogComponent},
  {path:'productCatalog', component:ProductCatalogComponent},
  {path:'product/:id', component:ProductDetailsComponent},
  {path:'cart', component:UserCartComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'useraccount', component:UserAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
