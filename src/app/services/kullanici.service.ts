
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Kullanici } from 'src/models/kullanici';

@Injectable({
  providedIn: 'root'
})
export class KullaniciService {

   baseUrl:  
  constructor(public http: HttpClient) {

  }
  getAllKullanici(): Observable<Kullanici[]> {
    return this.http.get<Kullanici[]>( this.baseUrl);
  }
  getKullaniciById(id: number): Observable<Kullanici> {
    return this.http.get<Kullanici>(this.baseUrl+id);

  }
  addKullanici(k: Kullanici) {
    return this.http.post<Kullanici>(this.baseUrl, k);
  }
  deleteKullanici(k: Kullanici) {
    return this.http.delete<Kullanici>(this.baseUrl+ "/"+ k.id);
  }
  updateUser(k:Kullanici){
    return this.http.put(this.baseUrl+"/"+k.id,k);
  }
}
