import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productList:any;
  constructor(private service:GeneralService) {
   }

  ngOnInit(): void {
    this.service.viewProduct().subscribe(data=>{
      this.productList = data;
      console.log(data);
    })
  }

  delete(id:any,i:number){
    if(confirm("Are you sure ? ")){
      this.service.deleteProduct(id).subscribe(data=>{
        if(data.status == 'Deleted')
          this.productList.splice(i,1);
      })
    }
  }

  i:any;
  editElement?:any={};
  categoryList:any[]=[];
  image:any;

  takingId(i:number){
    this.i=i;
    this.editElement.id = this.productList[i]._id; 
    this.editElement.name = this.productList[i].name;
    this.editElement.price = this.productList[i].price;
    this.editElement.oldImage = this.productList[i].image;
    this.editElement.stock = this.productList[i].stock;
    this.editElement.discount = this.productList[i].discount;
    this.editElement.description = this.productList[i].description;
    this.editElement.keywords = this.productList[i].keywords;
    this.editElement.catId = this.productList[i].catId._id;
    this.editElement.catName = this.productList[i].catId.name;
    this.service.viewCategory().subscribe(data=>{
      this.categoryList = data;
    });
    console.log(this.editElement);
  }
  selectImage(event:any){
    if(event.target.files.length > 0){
      this.image = event.target.files[0];
    }
  }

  selectCat(event:any){
    this.editElement.catId = event.target.value;
  }
  edit(){
    let formData = new FormData();
    formData.append("name",this.editElement.name);
    formData.append("image",this.image);
    formData.append("stock",this.editElement.stock);
    formData.append("price",this.editElement.price);
    formData.append("descrition",this.editElement.description);
    formData.append("discount",this.editElement.discount);
    formData.append("keywords",this.editElement.keywords);
    formData.append("catId",this.editElement.catId);
    formData.append("oldImage",this.editElement.oldImage);
    formData.append("id",this.editElement.id);

    this.service.editProduct(formData).subscribe(data=>{
      if(data)
        this.ngOnInit();
    })
  }
}