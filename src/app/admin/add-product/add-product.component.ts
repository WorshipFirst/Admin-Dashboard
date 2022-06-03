import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name:any;
  price:any;
  image:any;
  stock:any;
  description:any;
  catId:any;
  keywords:any;
  discount:any;
  categoryList:any;
  constructor(private service:GeneralService,private router:Router) {
    service.viewCategory().subscribe(data=>{
      this.categoryList = data;
    })
  }

  ngOnInit(): void {
  }

  selectImage(event:any){
    // console.log(event.target.files[0]);
    if(event.target.files.length>0){
      this.image = event.target.files[0];
    }
  }

  selectCategory(event:any){
    this.catId = event.target.value;
 
    
  }

  add(){
    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("image",this.image);
    formData.append("keywords",this.keywords);
    formData.append("stock",this.stock);
    formData.append("price",this.price);
    formData.append("discount",this.discount);
    formData.append("description",this.description);
    formData.append("catId",this.catId);
    this.service.addProduct(formData).subscribe(data=>{
      if(data.name)
        this.router.navigate(["view-product"]);
    })
  }

}
