import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './pages/admin/product/product-list/product-list.component';
import { ProductAddComponent } from './pages/admin/product/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product/product-edit/product-edit.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';


const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      {
        path: "product/:id", component: ProductDetailComponent
      },
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      {
        path: "product", component: ProductListComponent
      },
      {
        path: "product/add", component: ProductAddComponent
      },
      {
        path: "product/:id/edit", component: ProductEditComponent
      },
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
