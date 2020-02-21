import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { GoodsComponent } from './Components/goods/goods.component';
import { CartComponent } from './Components/cart/cart.component';
import { AccountComponent } from './Components/account/account.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"Home", component: HomeComponent},
  {path:"Login", component: LoginComponent},
  {path:"Signup", component: SignupComponent},
  {path:"Goods", component: GoodsComponent},
  {path:"Cart", component: CartComponent},
  {path:"Account", component: AccountComponent},
  {path:"Shopping", component: ShoppingComponent},
  {path:"**", component: NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
