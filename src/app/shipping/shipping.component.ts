import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService) { }

  shippingCosts!: Observable<{ type: string, price: number }[]>; //shipping cost accepts non null, Observable means the function that can produce multiple valuess over time
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
