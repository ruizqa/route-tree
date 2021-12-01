import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { AuthorComponent } from './author/author.component';
import { AllreviewsComponent } from './allreviews/allreviews.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReviewComponent,
    ProductDetailComponent,
    BrandComponent,
    CategoryComponent,
    ReviewDetailComponent,
    AuthorComponent,
    AllreviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
