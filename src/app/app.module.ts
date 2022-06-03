import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './admin/front/front.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ViewCategoryComponent } from './admin/view-category/view-category.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ViewProductComponent } from './admin/view-product/view-product.component';
import { MediaCategoryComponent } from './admin/media-category/media-category.component';
import { ViewMediaCategoryComponent } from './admin/view-media-category/view-media-category.component';
import { ViewMediaComponent } from './admin/view-media/view-media.component';
import { AddMediaComponent } from './admin/add-media/add-media.component';
import { AddTempleComponent } from './admin/add-temple/add-temple.component';
import { ViewTempleComponent } from './admin/view-temple/view-temple.component';
import { AddTemplePujaComponent } from './admin/add-temple-puja/add-temple-puja.component';
import { ViewTemplePujaComponent } from './admin/view-temple-puja/view-temple-puja.component';

import { AddEventCategoryComponent } from './admin/add-event-category/add-event-category.component';
import { ViewEventCategoryComponent } from './admin/view-event-category/view-event-category.component';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { ViewEventComponent } from './admin/view-event/view-event.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    AddProductComponent,
    ViewProductComponent,
    MediaCategoryComponent,
    ViewMediaCategoryComponent,
    ViewMediaComponent,
    AddMediaComponent,
    AddTempleComponent,
    ViewTempleComponent,
    AddTemplePujaComponent,
    ViewTemplePujaComponent,
   
    AddEventCategoryComponent,
    ViewEventCategoryComponent,
    AddEventComponent,
    ViewEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
