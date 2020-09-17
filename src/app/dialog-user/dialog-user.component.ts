import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Kullanici } from 'src/models/kullanici';

@Component({
  selector: 'dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {

  kullanici;
  constructor(@Inject(MAT_DIALOG_DATA) public data:Kullanici) {

   }

  ngOnInit(): void {
    console.log("dialog opened "+this.data.ad);
    this.kullanici=this.data;
  }
  toCinsiyet(durum){
    return durum==false?"Kadın":"Erkek";
  }

}
