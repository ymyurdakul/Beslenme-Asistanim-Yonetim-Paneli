import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Yonetici } from 'src/models/Yonetici';
import Swal from 'sweetalert2';
import { YoneticiService } from '../services/yonetici.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  visibleNew=false;
  admin;
  adminNew:Yonetici;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(public y_service:YoneticiService,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.admin=this.y_service.getYonetici();
  }
  save(ad,soyad,mail,sifre,sehir){
    var y=new Yonetici();
    y.ad=ad;
    y.sehir=sehir;
    y.soyad=soyad;
    y.mail=mail;
    y.sifre=sifre;
    if(ad==""||soyad==""||sehir==""||mail==""||sifre=="")
    {
      Swal.fire("Uyarı","Boş geçilen alanlar var","warning");
    }
    else{
      this.y_service.saveYonetici(y).subscribe(x=>{
        Swal.fire("Sonuc","Kayıt Başarılı","success");
      });
    }
    console.log(y);
  }
  updateAdmin(){
    this.y_service.updateAdmin(this.admin).subscribe(res=>{
      Swal.fire("Güncelleme","Yönetici Güncellendi","success");
    },err=>{
      Swal.fire("Güncelleme","Yönetici Güncellenemedi","error");

    });
  }

}
