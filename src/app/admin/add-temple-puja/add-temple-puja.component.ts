import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';
@Component({
  selector: 'app-add-temple-puja',
  templateUrl: './add-temple-puja.component.html',
  styleUrls: ['./add-temple-puja.component.css']
})
export class AddTemplePujaComponent implements OnInit {
  name:any;
  image:any;
  price:any;
  description:any;
  catId:any;
  day:any;
  templePujaList:any;
  constructor(private service:GeneralService) { 
    this.service.viewTemple().subscribe(data=>{
      this.templePujaList=data;
    })
  }

  ngOnInit(): void {
  }

  selectImage(event:any){
    if(event.target.files.length>0){
     this.image=event.target.files[0];
    }
  }

  selectCategory(event:any){
    this.catId=event.target.value;
  }

  add(){
    let formData=new FormData();
    formData.append("name",this.name);
    formData.append("price",this.price);
    formData.append("description",this.description);
    formData.append("image",this.image);
    formData.append("catId",this.catId);
    formData.append("day",this.day);

    this.service.addTemplePuja(formData).subscribe(data=>{
      if(data.result){
        alert("data addeddd..");
      }
      else{
        alert("data not addeddd..");
      }
    })
  }

}
