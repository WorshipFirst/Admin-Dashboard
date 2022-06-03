import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { GeneralService } from 'src/app/service/general.service';
@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit {
name:any="";
image:any="";
catId:any="";
link:any="";
type:any="";
lyrics:any="";
mediaList:any;
  constructor(private service:GeneralService) { 
  this.service.medaiViewCategory().subscribe(data=>{
    this.mediaList=data;
  })
  }

  selectImage(event:any){
    if(event.target.files.length>0)
    this.image=event.target.files[0];
  }

  selectCategory(event:any){
    this.catId = event.target.value;
    console.log(this.catId);
  }
  selectType(event:any){
    this.type=event.target.value;
    console.log(this.type);
  }

  add(){
    // console.log("hiiifdajsjk")
    let formData=new FormData();
    formData.append("name",this.name);
    formData.append("image",this.image);
    formData.append("catId",this.catId);
    formData.append("link",this.link);
    formData.append("type",this.type);
    formData.append("lyrics",this.lyrics); 
     this.service.addMedia(formData).subscribe(data=>{
      // this.mediaList=data;
      console.log(data.result);
      if(data){
        alert("data addedd successfully....");
      }
      else{
        
          alert("datanot addess....");
      
      }
    })
  }

  
  ngOnInit(): void {
  }

}
