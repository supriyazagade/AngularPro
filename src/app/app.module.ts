import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import {AfterLoginGuard} from './after-login.guard';
import {BeforeLoginGuard} from './before-login.guard';
import {CrudService} from './crud.service'
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './slider/slider.component';
import { FeaturedComponent } from './featured/featured.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { LogoutComponent } from './logout/logout.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';
import { DeleteBrandComponent } from './delete-brand/delete-brand.component';

const appRoutes: Routes = [
  { path: '', component: FeaturedComponent },
  { path: 'brand', component: BrandComponent ,canActivate: [BeforeLoginGuard]},
  { path: 'category', component: CategoryComponent,canActivate: [BeforeLoginGuard] },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent,canActivate: [AfterLoginGuard] },
  { path: 'logout', component: LogoutComponent },
  {path:"get_category/:catid" ,  component: FilterCategoryComponent},
  {path:"register" ,  component: RegisterComponent,canActivate: [AfterLoginGuard]},
  { path: 'editBrand/:brandid', component: EditBrandComponent },
  { path: 'deleteBrand/:brandid', component: DeleteBrandComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SliderComponent,
    FeaturedComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    BrandComponent,
    ProductComponent,
    FilterCategoryComponent,
    LogoutComponent,
    EditBrandComponent,
    DeleteBrandComponent  
    ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(appRoutes),ReactiveFormsModule,FormsModule
  ],
  providers: [AfterLoginGuard,BeforeLoginGuard,CrudService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
