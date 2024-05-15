import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://localhost:3000/api/products';
 
  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })};
 
  constructor(private http: HttpClient) {}
 
  datosApi = signal<any[]>([]);
 
  getProductos() {
    // console.log("prueba", this.http.get<any[]>(this.url));
    return this.http.get<any[]>(this.url);
  }
 
  getProducto(id: number) {
    return this.http.get<any>(`${this.url}/${id}`);
  }
 
  createProduct(producto: any) {
    return this.http.post<any>(this.url, JSON.stringify(producto), this.HttpOptions);
  }
 
  updateProducto(producto: any) {
    return this.http.put<any>(`${this.url}/${producto.id}`, producto);
  }
 
  deleteProducto(id: number) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}