import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http:HttpClient) { }

  addCategory(formdata:FormData):Observable<any>{
    let api = "http://localhost:3000/product-category/add";
    return this.http.post(api,formdata);
  }
  viewCategory():Observable<any>{
    let api = "http://localhost:3000/product-category/view";
    return this.http.get(api);
  }
  deleteCategory(id:any):Observable<any>{
    let api = "http://localhost:3000/product-category/delete/"+id;
    return this.http.delete(api);
  }
  editCategory(formData:FormData):Observable<any>{
    let api = "http://localhost:3000/product-category/edit";
    return this.http.post(api,formData);
  }
  addProduct(formdata:FormData):Observable<any>{
    let api = "http://localhost:3000/product/add";
    return this.http.post(api,formdata);
  }
  viewProduct():Observable<any>{
    let api = "http://localhost:3000/product/view";
    return this.http.get(api);
  }
  deleteProduct(id:any):Observable<any>{
    let api = "http://localhost:3000/product/delete/"+id;
    return this.http.delete(api);
  }
  editProduct(formData:FormData):Observable<any>{
    let api = "http://localhost:3000/product/edit";
    return this.http.post(api,formData);
  }

}
