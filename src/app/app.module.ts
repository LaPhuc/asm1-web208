import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/admin/product/product-list/product-list.component';
import { ProductAddComponent } from './pages/admin/product/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product/product-edit/product-edit.component';
import { DashboachComponent } from './pages/admin/dashboach/dashboach.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    DashboachComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
