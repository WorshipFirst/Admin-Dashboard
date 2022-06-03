import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  eventList:any;
  constructor(private service:GeneralService) {}

  ngOnInit(): void {
    this.service.viewEvent().subscribe(data=>{
      this.eventList = data;
    })
  }

  delete(id:any,i:number){
    if(confirm("Are you sure ? ")){
      this.service.deleteEvent(id).subscribe(data=>{
        if(data)
          this.eventList.splice(i,1);
      })
    }
  }

  i:any;
  editElement?:any={};
  categoryList:any[]=[];
  image:any;

  takingId(i:number){
    this.i=i;
    this.editElement.id = this.eventList[i]._id; 
    this.editElement.name = this.eventList[i].name;
    this.editElement.price = this.eventList[i].price;
    this.editElement.oldImage = this.eventList[i].image;
    this.editElement.description = this.eventList[i].description;
    this.editElement.catId = this.eventList[i].catId._id;
    this.editElement.catName = this.eventList[i].catId.name;
    this.service.viewCategory().subscribe(data=>{
      this.categoryList = data;
    });
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
    formData.append("price",this.editElement.price);
    formData.append("descrition",this.editElement.description);
    formData.append("catId",this.editElement.catId);
    formData.append("oldImage",this.editElement.oldImage);
    formData.append("id",this.editElement.id);

    this.service.editEvent(formData).subscribe(data=>{
      if(data)
        this.ngOnInit();
    })
  }
}
