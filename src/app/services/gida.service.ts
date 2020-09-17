import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gida } from 'src/models/gida';

@Injectable({
  providedIn: 'root'
})
export class GidaService {
   
  constructor(private http:HttpClient) { }
  gidaAra(text): Observable<Gida[]> {
    return this.http.get<Gida[]>(this.baseUrl + text + "/")
  }
  getAllGidas() {
    return this.http.get<Gida[]>(this.baseUrl);
  }
}
