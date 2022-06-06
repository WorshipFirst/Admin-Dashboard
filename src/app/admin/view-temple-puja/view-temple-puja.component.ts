import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';
@Component({
  selector: 'app-view-temple-puja',
  templateUrl: './view-temple-puja.component.html',
  styleUrls: ['./view-temple-puja.component.css']
})
export class ViewTemplePujaComponent implements OnInit {
  name: any;
  image: any;
  oldImage: any;
  price: any;
  day: any;
  catId: any;
  description: any;
  id:any;
  templeList:any;
  templePujaList: any;
  constructor(private service: GeneralService) {
    this.service.viewTemple().subscribe(data=>{
      this.templeList=data;
    })
   }

  takingId(id: any, name: any, image: any,price: any, day: any, description: any,catId:any) {
    this.name = name;
    this.oldImage = image;
    this.price = price;
    this.day = day;
    this.catId = catId;
    this.id=id;
    this.description=description;
    console.log(catId)
  }
  ngOnInit(): void {
    this.service.viewTemplePuja().subscribe(data => {
      this.templePujaList = data;
    })
  }

  selectTemple(event:any){
    this.catId=event.target.value;
  }
selectImage(event:any){
  if(event.target.files.length>0){
    this.image= event.target.files[0];
  }
}

  edit(id:any){
     let formData=new FormData();
     formData.append("name",this.name);
     formData.append("image",this.image);
     formData.append("oldImage",this.oldImage);
     formData.append("price",this.price);
     formData.append("day",this.day);
     formData.append("catId",this.catId);
     formData.append("description",this.description);
 formData.append("id",this.id);
     this.service.updateTemplePuja(formData).subscribe(data=>{
       
       if(data.message="update"){
         alert("update Successfully....");
         this.ngOnInit();
       }
       else{
         alert("not updated....");
       }
     })
  }

  deleteTemple(id:any,i:any){
    if(confirm("are you sure....")){
   this.service.deleteTemplePuja(id).subscribe(data=>{
     this.templePujaList.splice(i,1);
  
     if(data.result){
       alert("deleted successfully");
     }
     else{
       alert("not deleted");
     }
   })
  }
  }

}
