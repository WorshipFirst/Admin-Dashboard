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

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    AddProductComponent,
    ViewProductComponent,
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
