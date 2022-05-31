import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { FrontComponent } from './admin/front/front.component';
import { ViewCategoryComponent } from './admin/view-category/view-category.component';
import { ViewProductComponent } from './admin/view-product/view-product.component';

const routes: Routes = [
  {path : "" , component : FrontComponent},
  {path : "add-category" , component : AddCategoryComponent},
  {path : "view-category" , component : ViewCategoryComponent},
  {path : "add-product" , component : AddProductComponent},
  {path : "view-product" , component : ViewProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
