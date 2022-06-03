import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';
@Component({
  selector: 'app-add-temple',
  templateUrl: './add-temple.component.html',
  styleUrls: ['./add-temple.component.css']
})
export class AddTempleComponent implements OnInit {
  name:any;
  image:any;
  address:any;
  templeList:any;
  constructor(private service:GeneralService) { }

   selectImage(event:any){
     if(event.target.files.length>0){
       this.image=event.target.files[0];
     }
   }

   add(){
   let formData=new FormData();
   formData.append("name",this.name);
   formData.append("image",this.image);
   formData.append("address",this.address);

   this.service.addTemple(formData).subscribe(data=>{
     this.templeList=data;
     console.log(this.templeList)
     if(data.result){
       alert("Successfully added..");
     }
     else{
       alert("not addedd...")
     }
   })
   }
  ngOnInit(): void {
  }

}
