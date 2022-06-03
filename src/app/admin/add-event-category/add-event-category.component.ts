import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-add-event-category',
  templateUrl: './add-event-category.component.html',
  styleUrls: ['./add-event-category.component.css']
})
export class AddEventCategoryComponent implements OnInit {
  name:any;
  imgae:any;
  type:any;
  constructor(private service:GeneralService,private router:Router) { }

  ngOnInit(): void {
  }
  selectImage(event:any){
    if(event.target.files.length>0)
      this.imgae = event.target.files[0];
  }
  add(){
    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("image",this.imgae);
    formData.append("type",this.type);
    this.service.addEventCategory(formData).subscribe(data=>{
      if(data._id)
        this.router.navigate(["view-event-category"]);
    })
  }
  selectType(event:any){
    this.type = event.target.value;
  }

}
