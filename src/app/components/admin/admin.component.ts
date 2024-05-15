// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { ProductService } from '../../services/product-service.service';
// import { Product } from '../../product.model';

// @Component({
//   selector: 'app-admin',
//   imports: [ReactiveFormsModule],
//   standalone: true,
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent {

//   myForm = new FormGroup({
//     title: new FormControl('', [Validators.required]),
//     reference: new FormControl('', [Validators.required]),
//     description: new FormControl('', [Validators.required]),
//     price: new FormControl('', [Validators.required]),
//     size: new FormControl('', [Validators.required]),
//     category: new FormControl('', [Validators.required]),
//   });

//   product: Product = {
//     title: '',
//     reference: '',
//     description: '',
//     price: 0,
//     size: 0,
//     category: ''
//   }

//   constructor(private productService: ProductService) { }

//   onSubmit() {
//     if (this.myForm.valid) {
//       //console.log(this.myForm.value?.reference)
//       this.product = {
//         title: this.myForm.value?.title,
//         reference: this.myForm.value?.reference,
//         description: this.myForm.value?.description,
//         price: this.myForm.value?.price,
//         size: this.myForm.value?.size,
//         category: this.myForm.value?.category
//       };

//       console.log(this.product);



//       this.productService.addProduct(this.product);
//       this.myForm.reset();
//     }
//   }

//   // get reference() {
//   //   return this.myForm.get('reference');
//   // }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product-service.service';
import { ApiService } from '../../services/api.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private apiService: ApiService
  ) {
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required],
      reference: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      size: [0, Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const productData = this.myForm.value;
      const product: Product = {
        title: productData.title,
        reference: productData.reference,
        description: productData.description,
        price: productData.price,
        size: productData.size,
        category: productData.category
      };

      // Add product locally
      this.productService.addProduct(product);

      // Send product to backend
      this.apiService.createProduct(product).subscribe(
        response => {
          console.log('Product created successfully:', response);
          // Optionally, you can reset the form after successful submission
          this.myForm.reset();
        },
        error => {
          console.error('Error creating product:', error);
        }
      );
    }
  }
}
