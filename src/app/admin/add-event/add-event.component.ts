import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  name:any;
  price:any;
  image:any;
  
  description:any;
  catId:any;
  categoryList:any;
  constructor(private service:GeneralService,private router:Router) {
    service.viewEventCategory().subscribe(data=>{
      this.categoryList = data;
    })
  }

  ngOnInit(): void {
  }

  selectImage(event:any){
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
    formData.append("price",this.price);
    formData.append("description",this.description);
    formData.append("catId",this.catId);
    this.service.addEvent(formData).subscribe(data=>{
      if(data.name)
        this.router.navigate(["view-event"]);
    })
  }



}
