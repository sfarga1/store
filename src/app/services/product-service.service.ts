import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productosSubject = new BehaviorSubject<Product[]>([]);
  productos = this.productosSubject.asObservable();

  //productos$ = this.productosSubject.asObservable();

  constructor() { }

  addProduct(product: Product) {
    const currentProducts = this.productosSubject.getValue();
    this.productosSubject.next([...currentProducts, product]);
  }
}
