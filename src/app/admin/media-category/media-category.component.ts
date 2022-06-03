import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-media-category',
  templateUrl: './media-category.component.html',
  styleUrls: ['./media-category.component.css']
})
export class MediaCategoryComponent implements OnInit {

  name:any;
  image:any;
  // type:any;
  constructor(private service:GeneralService,private router:Router) { }
  ngOnInit(): void {
  }

  selectImage(event:any){
    // console.log(event.target.files[0]);
    if(event.target.files.length>0){
      this.image = event.target.files[0];
    }
  }

  // selectType(event:any){
  //   this.type = event.target.value;
  // }

  add(){
    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("image",this.image);
    // formData.append("type",this.type);
    this.service.mediaAddCategory(formData).subscribe(data=>{
      console.log(data);
      // this.router.navigate(["view-media-category"]);
    
      if(data.result){
        alert('not successful');
      }
      else{
      
        alert('Successfullly added');
      }
    })
  }

}
