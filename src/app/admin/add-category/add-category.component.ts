import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  name:any;
  image:any;
  type:any;
  constructor(private service:GeneralService,private router:Router) { }
  ngOnInit(): void {
  }

  selectImage(event:any){
    // console.log(event.target.files[0]);
    if(event.target.files.length>0){
      this.image = event.target.files[0];
    }
  }

  selectType(event:any){
    this.type = event.target.value;
  }

  add(){
    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("image",this.image);
    formData.append("type",this.type);
    this.service.addCategory(formData).subscribe(data=>{
      // console.log(data);
      this.router.navigate(["view-category"]);
    })
  }

}
