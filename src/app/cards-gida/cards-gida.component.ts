import { Component, OnInit } from '@angular/core';
import { GidaService } from '../services/gida.service';

@Component({
  selector: 'cards-gida',
  templateUrl: './cards-gida.component.html',
  styleUrls: ['./cards-gida.component.css']
})
export class CardsGidaComponent implements OnInit {
  count=0;
  constructor(private g_service:GidaService) { }

  ngOnInit(): void {
    this.g_service.getAllGidas().subscribe(res=>{
      this.count=res.length;
    });
  }

}
