import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './components/auth.guard';
import { BrandsComponent } from './components/brands/brands.component';
import { DetailsComponent } from './components/details/details.component';
import { ProdetailsComponent } from './components/prodetails/prodetails.component';
import { FwComponent } from './fw/fw.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
{path:'',redirectTo:"register",pathMatch:'full'},
{path:'register',component:RegisterComponent},
{path:'Login',component:LoginComponent},
{path:'home',canActivate:[authGuard],component:HomeComponent},
{path:'products',canActivate:[authGuard],component:ProductsComponent},
{path:'categories',canActivate:[authGuard],component:CategoriesComponent},
{path:'cart',canActivate:[authGuard],component:CartComponent},
{path:'brands',canActivate:[authGuard],component:BrandsComponent},
{path:'prodetails',canActivate:[authGuard],component:ProdetailsComponent},
{path:'pay/:id',canActivate:[authGuard],component:PayComponent},
{path:'fw/:id',canActivate:[authGuard],component:FwComponent},
// {path:'setting',loadChildren:()=>import('./setting/setting.module').then((m)=>{m.SettingModule})},


{path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
