import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-view-event-category',
  templateUrl: './view-event-category.component.html',
  styleUrls: ['./view-event-category.component.css']
})
export class ViewEventCategoryComponent implements OnInit {
  categoryList:any[]=[];
  constructor(private service:GeneralService) {
  }

  ngOnInit(): void {
    this.service.viewEventCategory().subscribe(data=>{
      if(data)  
        this.categoryList = data;
    });
  }
  delete(id:any,i:any){
    if(confirm("Are you sure?")){
      this.service.deleteEventCategory(id).subscribe(data=>{
        if(data){
          this.categoryList.splice(i,1);
        }
      })
    }
  }
  editElement?:any={};
  takingElement(i:any){
    this.editElement.name = this.categoryList[i].name;
    this.editElement.id = this.categoryList[i]._id;
    this.editElement.type = this.categoryList[i].type;
    this.editElement.oldImage = this.categoryList[i].image;
  }
  selectImage(event:any){
    if(event.target.files.length>0)
      this.editElement.image = event.target.files[0];
  }

  edit(){
    let formData = new FormData();
    formData.append("name",this.editElement.name);
    formData.append("id",this.editElement.id);
    formData.append("type",this.editElement.type);
    formData.append("image",this.editElement.image);
    formData.append("oldImage",this.editElement.oldImage);

    this.service.editEventCategory(formData).subscribe(data=>{
      if(data.modifiedCount>0)
        this.ngOnInit();
    });
  }

  selectType(event:any){
    this.editElement.type = event.target.value;
  }

}
