import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  items$: BehaviorSubject<Product[]> = new BehaviorSubject(this.items);
  constructor(private http: HttpClient){}

  getShippingPrices(){
    return this.http.get<{type: string, price:number}[]>
    ('/assets/shipping.json')
  }

  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  get itemsStream() {
    return this.items$.asObservable();

  }
}
