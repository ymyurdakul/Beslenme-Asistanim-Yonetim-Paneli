import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Kullanici } from 'src/models/kullanici';
import Swal from 'sweetalert2';
import { KullaniciService } from '../services/kullanici.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  kullanici:Kullanici;
  constructor(public k_service:KullaniciService) { }
  isOkey = true;
  model: any = {}
  ngOnInit(): void {
    this.kullanici=new Kullanici();

   }
   saveKullanici() {


    this.k_service.addKullanici(this.kullanici).subscribe(res=>{
      Swal.fire("Sonuc","Kullanıcı Kaydedildi.","success");
    },err=>{
      Swal.fire("Sonuc","Kullanıcı Kaydedildilemedi.","error");

    })

  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
  }
  showData(){
    console.log(this.kullanici);
    this.kullanici.boy=Number(this.kullanici.boy);
    this.kullanici.cinsiyet=Boolean(this.kullanici.cinsiyet);
    this.saveKullanici();
  }
}
