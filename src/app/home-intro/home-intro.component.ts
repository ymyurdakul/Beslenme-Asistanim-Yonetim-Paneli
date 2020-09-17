import { Component, OnInit } from '@angular/core';
import { YoneticiService } from '../services/yonetici.service';

@Component({
  selector: 'home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.css']
})
export class HomeIntroComponent implements OnInit {

  constructor(public y_service:YoneticiService) {

   }

  ngOnInit(): void {
  }
  getKulAd(){
    return this.y_service.getYonetici().ad;
  }
}
