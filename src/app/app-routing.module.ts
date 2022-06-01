import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddEventCategoryComponent } from './admin/add-event-category/add-event-category.component';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { FrontComponent } from './admin/front/front.component';
import { ViewCategoryComponent } from './admin/view-category/view-category.component';
import { ViewEventCategoryComponent } from './admin/view-event-category/view-event-category.component';
import { ViewEventComponent } from './admin/view-event/view-event.component';
import { ViewProductComponent } from './admin/view-product/view-product.component';

const routes: Routes = [
  {path : "" , component : FrontComponent},
  {path : "add-category" , component : AddCategoryComponent},
  {path : "view-category" , component : ViewCategoryComponent},
  {path : "add-product" , component : AddProductComponent},
  {path : "view-product" , component : ViewProductComponent},
  {path : "view-event-category" , component : ViewEventCategoryComponent},
  {path : "add-event-category" , component : AddEventCategoryComponent},
  {path : "add-event" , component : AddEventComponent},
  {path : "view-event" , component : ViewEventComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
