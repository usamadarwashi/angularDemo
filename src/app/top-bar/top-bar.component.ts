import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(private cartService: CartService, private router: Router){}

  checkCart(){
    this.cartService.itemsStream.subscribe(items => { // subscribe to the changes
      if(!items || items.length === 0){
        window.alert('Your cart is empty');
      }
      else {
        this.router.navigateByUrl('/cart');
      }
    });
  }  

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/