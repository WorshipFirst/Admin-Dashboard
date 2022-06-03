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
 type:any;
 catId:any;
 link:any;
 lyrics:any;
 mediaList:any;
  constructor(private service:GeneralService) { }

  ngOnInit(): void {
   this.service.viewMedia().subscribe(data=>{
     console.log(data);
       this.mediaList=data.RESULT;
       console.log(this.mediaList);
   })
  }

}
