import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';
@Component({
  selector: 'app-view-media',
  templateUrl: './view-media.component.html',
  styleUrls: ['./view-media.component.css']
})
export class ViewMediaComponent implements OnInit {
 name:any;
 image:any;
 oldImage:any;
 type:any;
 catId:any;
 link:any;
 id:any
 lyrics:any;
 mediaList:any[]=[];
 mediaCatList:any;
 catName:any;
  constructor(private service:GeneralService) {
    this.service.medaiViewCategory().subscribe(data=>{
       this.mediaCatList=data;
    })
   }

  takingId(id:any,image:any,name:any,type:any,link:any,catId:any,catName : any){
    this.id=id;
    this.oldImage=image;
    this.name=name;
    this.type=type;
    this.link=link;
    this.catId=catId;
    this.catName = catName;
    console.log(catId);
  }

  selectImage(event:any){
    if(event.target.files.length>0){
      this.image=event.target.files[0];
    }
  }

  selectMedia(event:any){
    this.catId=event.target.value;
  }

  ngOnInit(): void {
   this.service.viewMedia().subscribe(data=>{
    //  console.log(data);
    //  for (let item of data.RESULT){
    //    if(item.catId)
    //    this.mediaList.push(item);
    //  }
       this.mediaList = data.RESULT;
      // console.log(data.RESULT);
   })
  }

   editCategory(id:any){
    let formData=new FormData();
    formData.append("name",this.name);
    formData.append("image",this.image);
    formData.append("oldImage",this.oldImage);
    formData.append("type",this.type);
    formData.append("link",this.link);
    formData.append("catId",this.catId);
    formData.append("id",this.id);
    this.service.updateMedia(formData).subscribe(data=>{
      if(data.message="update"){
        alert("update Successfully....");
        this.ngOnInit();
      }
      else{
        alert("not updated....");
      }
    })
  }

  deleteCategory(id:any,i:any){
    if(confirm("are you sure....")){
      console.log(id);
      this.service.deleteMedia(id).subscribe(data=>{
        console.log(data)
        this.mediaList.splice(i,1);
       
        if(data){
          alert("deleted successfully");
          this.ngOnInit();
        }
        else{
          alert("not deleted");
        }
      })
     }
  }

}
