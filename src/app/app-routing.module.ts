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
  {path:"", component: HomeComponent},
  {path:"Home", component: HomeComponent},
  {path:"Login", component: LoginComponent, canActivate: [UserGuard]},
  {path:"Signup", component: SignupComponent, canActivate: [UserGuard]},
  {path:"Goods", component: GoodsComponent, canActivate: [AuthGuard]},
  {path:"Cart", component: CartComponent, canActivate: [AuthGuard]},
  {path:"Account", component: AccountComponent},
  {path:"Dash", component: DashboardComponent, canActivate: [AuthGuard]},
  {path:"**", component: NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
