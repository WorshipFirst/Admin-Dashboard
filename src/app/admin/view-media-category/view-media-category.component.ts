import { NgLocalization } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';
@Component({
  selector: 'app-view-media-category',
  templateUrl: './view-media-category.component.html',
  styleUrls: ['./view-media-category.component.css']
})
export class ViewMediaCategoryComponent implements OnInit {
  viewMediaList: any;
  name: any = "";
  image: any = "";
  id: any;
  oldImage: string = "";
  constructor(private service: GeneralService) {

  }

  ngOnInit(): void {
    this.service.medaiViewCategory().subscribe(data => {
      console.log(data);
      this.viewMediaList = data;
    })
  }


  selectImage(event: any) {
    if (event.target.files.length > 0)
      this.image = event.target.files[0];
  }

  takingId(id: any, name: String, image: any) {
    this.id = id;
    this.name = name;
    this.oldImage = image;
  }

  editCategory(id: any) {
    let formData = new FormData();
    formData.append("name", this.name);
    formData.append("image", this.image);
    formData.append("oldImage", this.oldImage);
    formData.append("id", this.id);
    console.log('hiii');
    this.service.editMediaCategory(formData).subscribe(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        location.reload();
      }
    })
  }

  deleteCategory(id:any,i:any) {

    if (confirm("Are you sure.... ")) {
      this.service.deleteMediaCategory(id).subscribe(data => {
        console.log(data);
        if (data.message='delete success') {
          location.reload();
          this.viewMediaList.splice(i,1)

          alert("deleted Successfully...");
        
        }
        else{
          alert("not Deleted...");
        }
      })
    }
  }
}
