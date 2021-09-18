import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  public items: Product[] = [];

  // tslint:disable-next-line:typedef
  getProduct(){
    return this.productList.asObservable();
  }

  // tslint:disable-next-line:typedef
  setProduct(product: any){
    // @ts-ignore
    this.cartItemList.push(...Product);
    this.productList.next(product);
  }

  // tslint:disable-next-line:typedef
  addToCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList);
  }

  // tslint:disable-next-line:typedef no-shadowed-variable
  /*addToCart(product: Product) {
    this.items.push(product);
  }*/

  // tslint:disable-next-line:typedef
  removeCartItem(product: any){
    this.cartItemList.map((a: any, index: any) => {
      if (product.Id === a.Id){
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }

  // tslint:disable-next-line:typedef
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  // tslint:disable-next-line:typedef
  getItems() {
    return this.items;
  }

  // tslint:disable-next-line:typedef
  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor(
    private http: HttpClient
  ) { }
}
