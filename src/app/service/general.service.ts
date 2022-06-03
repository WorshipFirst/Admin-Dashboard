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


  mediaAddCategory(formData:FormData):Observable<any>{
    let api="http://localhost:3000/mediafile-category/add";
    return this.http.post(api,formData);
  }

  medaiViewCategory():Observable<any>{
   let api="http://localhost:3000/mediafile-category/view"
    return this.http.get(api);
  }

  editMediaCategory(formData:FormData):Observable<any>{
    let api="http://localhost:3000/mediafile-category/update";
    return this.http.post(api,formData);
  }
  deleteMediaCategory(id:any):Observable<any>{
    let api="http://localhost:3000/mediafile-category/delete/"+id;
    return this.http.delete(api);
  }

  addMedia(formData:FormData):Observable<any>{
    let api="http://localhost:3000/mediafile/add";
    return this.http.post(api,formData);
  }
  
  viewMedia():Observable<any>{
    let api="http://localhost:3000/mediafile/view";
    return this.http.get(api);
  }

  addTemple(formData:FormData):Observable<any>{
    let api="http://localhost:3000/temple/add";
    return this.http.post(api,formData);
  }

  viewTemple():Observable<any>{
    let api="http://localhost:3000/temple/view";
    return this.http.get(api);
  }

  updateTemple(formData:FormData):Observable<any>{
    let api="http://localhost:3000/temple/update";
    return this.http.post(api,formData);
  }

  deleteTemple(id:any):Observable<any>{
    let api="http://localhost:3000/temple/delete/"+id;
    return this.http.delete(api);
  }

  addTemplePuja(formData:FormData):Observable<any>{
    let api="http://localhost:3000/templePooja/add";
    return this.http.post(api,formData);
  }

  viewTemplePuja():Observable<any>{
    let api="http://localhost:3000/templePooja/view";
    return  this.http.get(api);
  }

  updateTemplePuja(formData:FormData):Observable<any>{
    let api="http://localhost:3000/templePooja/update";
    return this.http.post(api,formData)
  }

  addEventCategory(formdata:FormData):Observable<any>{
    let api = "http://localhost:3000/event-category/add";
    return this.http.post(api,formdata);
  }
  viewEventCategory():Observable<any>{
    let api = "http://localhost:3000/event-category/view";
    return this.http.get(api);
  }
  deleteEventCategory(id:any):Observable<any>{
    let api = "http://localhost:3000/event-category/delete/"+id;
    return this.http.delete(api);
  }
  editEventCategory(formData:FormData):Observable<any>{
    let api = "http://localhost:3000/event-category/update";
    return this.http.post(api,formData);
  }
  addEvent(formdata:FormData):Observable<any>{
    let api = "http://localhost:3000/event/add";
    return this.http.post(api,formdata);
  }
  viewEvent():Observable<any>{
    let api = "http://localhost:3000/event/view";
    return this.http.get(api);
  }
  deleteEvent(id:any):Observable<any>{
    let api = "http://localhost:3000/event/delete/"+id;
    return this.http.delete(api);
  }
  editEvent(formData:FormData):Observable<any>{
    let api = "http://localhost:3000/event/update";
    return this.http.post(api,formData);
  }

}
