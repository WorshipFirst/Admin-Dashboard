import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categoryList:any[]=[];
  constructor(private service:GeneralService) { }

  deleteCat(id:any,i:any){
    if(confirm("Are you sure ? ")){
      this.service.deleteCategory(id).subscribe(data=>{
        if(data.status){
          console.log("Deleted");
          this.categoryList.splice(i,1);
        }
      })
    }
  }

  ngOnInit(): void {
    this.service.viewCategory().subscribe(data=>{
      this.categoryList = data;
    });
  }

  id:any;
  name:string="";
  type:string="";
  image:any;
  oldImage:string="";
  takingId(id:any,name:string,type:string,image:any){
    this.id = id;
    this.name = name;
    this.type = type;
    this.oldImage = image;
  }

  selectType(event:any){
    this.type = event.target.value;
  }

  selectImage(event:any){
    if(event.target.files.length > 0)
      this.image = event.target.files[0];
  }

  editCategory(id:any){
    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("image",this.image);
    formData.append("oldImage",this.oldImage);
    formData.append("id",id);
    formData.append("type",this.type);
    
    this.service.editCategory(formData).subscribe(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        location.reload();      
      }
    })
  }
  
}
