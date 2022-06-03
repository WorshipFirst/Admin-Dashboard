import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';
@Component({
  selector: 'app-view-temple',
  templateUrl: './view-temple.component.html',
  styleUrls: ['./view-temple.component.css']
})
export class ViewTempleComponent implements OnInit {
templeList:any;
name:any;
oldImage:any;
image:any;
address:any;
id:any;
  constructor(private service:GeneralService) { }

  selectImage(event:any){
    if(event.target.files.length>0){
      this.image=event.target.files[0];
    }
  }
  takingId(id:any,name:any,address:any,image:any){
    this.name=name;
    this.address=address;
    this.id=id;
    this.oldImage=image;
  }
editTemple(id:any){
   let formData=new FormData();
   formData.append("name",this.name);
   formData.append("image",this.image);
   formData.append("oldImage",this.oldImage);
   formData.append("address",this.address);
   formData.append("id",this.id);
  this.service.updateTemple(formData).subscribe(data=>{
    if(data.modifiedCount>0){
      alert("update Successfully");
      // data.reload();
      this.ngOnInit();
    }
    else{
      alert("not updated...");
    }
  })
}

deleteTemple(id:any,i:any){
  if(confirm("are you sure....")){
 this.service.deleteTemple(id).subscribe(data=>{
   this.templeList.splice(i,1);

   if(data.result){
     alert("deleted successfully");
   }
   else{
     alert("not deleted");
   }
 })
}
}

  ngOnInit(): void {
    this.service.viewTemple().subscribe(data=>{
      this.templeList=data;
      // console.log(data);
    });
  }

}
