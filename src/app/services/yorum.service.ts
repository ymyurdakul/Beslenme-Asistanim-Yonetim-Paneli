import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Yorum } from 'src/models/yorum';

@Injectable({
  providedIn: 'root'
})
export class YorumService {
   
  constructor(private http:HttpClient) {

   }
   getAllYorums(){
    return this.http.get<Yorum[]>(this.baseUrl);
   }
}
