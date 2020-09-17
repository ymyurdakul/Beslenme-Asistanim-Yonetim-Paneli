import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Kullanici } from 'src/models/kullanici';
import { KullaniciService } from '../services/kullanici.service';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.css']
})
export class DialogEditUserComponent implements OnInit {
  showProgress=false;
  isUpdated=false;
   constructor(@Inject(MAT_DIALOG_DATA) public kullanici:Kullanici,public userService:KullaniciService) { }

  ngOnInit(): void {

  }
  toCinsiyet(durum){
    return durum==false?"Kadın":"Erkek";
  }
  updateUser(){
    this.showProgress=true;
    this.userService.updateUser(this.kullanici).subscribe(res=>{
      console.log(res);
      this.showProgress=false;
      this.isUpdated=true;

    });
  }
}
