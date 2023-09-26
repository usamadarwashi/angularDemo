import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule, //provides necessary services for working with a web browser. It's essential for running any Angular application and it needs to be imported into the root Module.
    ReactiveFormsModule, // It enables a programmer to handle user input with more complex form handling and validation strategies.
    RouterModule.forRoot([ //this module provides a service that lets you define navigation among views or routing in Angular applications. The forRoot() method is a configuration method that takes an array of route definitions and ensures we are only installing the Router service once.
      { path: '', component: ProductListComponent }, //corresponds to the default or base route. The path here is an empty string (''), which means this component will be displayed when the application URL has no additional path appended after the base URL (like http://www.website.com/).
      { path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/