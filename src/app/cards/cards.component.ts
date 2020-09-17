import { Component, OnInit } from '@angular/core';
import { kMaxLength } from 'buffer';
import { KullaniciService } from '../services/kullanici.service';

@Component({
  selector: 'cards-kullanici',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  count=0;
  constructor(private k_service:KullaniciService) { }

  ngOnInit(): void {
    this.k_service.getAllKullanici().subscribe(res=>{
      this.count=res.length;
    });
  }

}
