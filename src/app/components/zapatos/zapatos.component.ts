import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-zapatos',
  standalone: true,
  templateUrl: './zapatos.component.html',
  styleUrls: ['./zapatos.component.css']
})
export class ZapatosComponent {

  products: Product[] = [];

  constructor(private productService:ProductService) {}

  ngOnInit() {
    this.productService.productos.subscribe(products => {
      // Aquí manejas los productos
      console.log(products);
    });
  }

}
