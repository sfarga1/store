import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

constructor(private productService: ProductService) {}

  myForm = new FormGroup({
    'reference' : new FormControl('') // añadir mas campos
  });



  // producto = {
  //   reference: String
  // };

  onSubmit() {

    // crear interface
    // this.producto {
    //   this.name = valor,
    // }
    console.log(this.myForm.value);


    //this.productService.addProduct(producto: Producto) // Produto = interface



  }

}
