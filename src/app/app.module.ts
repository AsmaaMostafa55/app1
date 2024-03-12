import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { BrandsComponent } from './components/brands/brands.component';
// import { ComponentsComponent } from './productDetails/components/components.component';
// import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { DetailsComponent } from './components/details/details.component';
import { ProdetailsComponent } from './components/prodetails/prodetails.component';
import { FwComponent } from './fw/fw.component'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './search.pipe';
import {
  NgxAwesomePopupModule,
  DialogConfigModule,
  ConfirmBoxConfigModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import { AddheaderInterceptor } from './addheader.interceptor';
import { PayComponent } from './pay/pay.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    NotfoundComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    BrandsComponent,
    // ComponentsComponent,
    // ProductdetailsComponent,
    DetailsComponent,
    ProdetailsComponent,
    FwComponent,
    SearchPipe,
    PayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,RouterModule,BrowserAnimationsModule ,CarouselModule,FormsModule,
    
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
    ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
    ToastNotificationConfigModule.forRoot() // Needed for instantiating toast notifications.
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AddheaderInterceptor,
      multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
