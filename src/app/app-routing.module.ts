import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { GoodsComponent } from './Components/goods/goods.component';
import { CartComponent } from './Components/cart/cart.component';
import { AccountComponent } from './Components/account/account.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './Services/guards/auth.guard';
import { UserGuard } from './Services/guards/user.guard';


const routes: Routes = [
  {path:"", component: HomeComponent, data: {index: 0}},
  {path:"Home", component: HomeComponent, data: {index: 0},},
  {path:"Login", component: LoginComponent, data: {index: 2}, canActivate: [UserGuard]},
  {path:"Signup", component: SignupComponent, data: {index: 4}, canActivate: [UserGuard]},
  {path:"Goods", component: GoodsComponent, canActivate: [AuthGuard]},
  {path:"Cart", component: CartComponent, data: {index: 1}, canActivate: [AuthGuard]},
  {path:"Account", component: AccountComponent},
  {path:"Dash", component: DashboardComponent, data: {index: 3}, canActivate: [AuthGuard]},
  {path:"**", component: NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
