import { Component } from '@angular/core';

import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-zapatos',
  standalone: true,
  templateUrl: './zapatos.component.html',
  styleUrls: ['./zapatos.component.css']
})
export class ZapatosComponent {

  constructor(private productService:ProductService) {}

  // ngInit() {
  //   this.productService.subscribe()
  // }

}
