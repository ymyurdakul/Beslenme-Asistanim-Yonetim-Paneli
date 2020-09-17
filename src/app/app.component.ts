import { Component, OnInit } from '@angular/core';
import { Kullanici } from 'src/models/kullanici';
import { YoneticiService } from './services/yonetici.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Beslenme';
  isim="";
  kullanici:any;
  constructor(public y_service:YoneticiService){

  }
  ngOnInit(){
    this.kullanici = this.y_service.getYonetici();
    console.log(this.kullanici);
  }
  getKulAd(){
    return this.kullanici.ad.toUpperCase()[0]+"."+this.kullanici.soyad.toUpperCase();
  }

}
