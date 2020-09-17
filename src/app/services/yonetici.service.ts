import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Yonetici } from 'src/models/Yonetici';

@Injectable({
  providedIn: 'root'
})
export class YoneticiService {
   
  constructor(public httpClient:HttpClient) {

   }
   getYonetici()
   {

     var a:Yonetici=   JSON.parse(localStorage.getItem("currentUser"));

     return a;

   }
   saveYonetici(y:Yonetici)
   {
     return this.httpClient.post<Yonetici>(this.baseUrl,y);
   }
   updateAdmin(y:Yonetici){
    return this.httpClient.put(this.baseUrl+"/"+y.id,y);
   }
}
