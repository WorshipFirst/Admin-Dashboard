import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddMediaComponent } from './admin/add-media/add-media.component';

import { AddEventCategoryComponent } from './admin/add-event-category/add-event-category.component';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddTemplePujaComponent } from './admin/add-temple-puja/add-temple-puja.component';
import { AddTempleComponent } from './admin/add-temple/add-temple.component';
import { FrontComponent } from './admin/front/front.component';
import { MediaCategoryComponent } from './admin/media-category/media-category.component';
import { ViewCategoryComponent } from './admin/view-category/view-category.component';
import { ViewEventCategoryComponent } from './admin/view-event-category/view-event-category.component';
import { ViewEventComponent } from './admin/view-event/view-event.component';
import { ViewProductComponent } from './admin/view-product/view-product.component';
import { ViewTemplePujaComponent } from './admin/view-temple-puja/view-temple-puja.component';
import { ViewTempleComponent } from './admin/view-temple/view-temple.component';
import { ViewMediaCategoryComponent } from './admin/view-media-category/view-media-category.component';
import { ViewMediaComponent } from './admin/view-media/view-media.component';

const routes: Routes = [
  {path : "" , component : FrontComponent},
  {path : "add-category" , component : AddCategoryComponent},
  {path : "view-category" , component : ViewCategoryComponent},
  {path : "add-product" , component : AddProductComponent},
  {path : "view-product" , component : ViewProductComponent},

   {path:  "add-media-category",component:MediaCategoryComponent},
   {path: "view-media-category",component:ViewMediaCategoryComponent},
   {path:"add-media",component:AddMediaComponent},
   {path:"view-media",component:ViewMediaComponent},
   {path:"add-temple",component:AddTempleComponent},
   {path:"view-temple",component:ViewTempleComponent},
   {path:"add-temple-puja",component:AddTemplePujaComponent},
   {path:"view-temple-puja",component:ViewTemplePujaComponent},

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
