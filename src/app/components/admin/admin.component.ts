import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product-service.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  myForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    reference: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  product: Product = {
    title: '',
    reference: '',
    description: '',
    price: 0,
    size: 0,
    category: ''
  }

  constructor(private productService: ProductService) { }

  onSubmit() {
    if (this.myForm.valid) {
      //console.log(this.myForm.value?.reference)
      this.product = {
        title: this.myForm.value?.title,
        reference: this.myForm.value?.reference,
        description: this.myForm.value?.description,
        price: this.myForm.value?.price,
        size: this.myForm.value?.size,
        category: this.myForm.value?.category
      };

      console.log(this.product);



      this.productService.addProduct(this.product);
      this.myForm.reset();
    }
  }

  // get reference() {
  //   return this.myForm.get('reference');
  // }
}
