import { Component, OnInit } from '@angular/core';
import { YorumService } from '../services/yorum.service';

@Component({
  selector: 'cards-notification',
  templateUrl: './cards-notification.component.html',
  styleUrls: ['./cards-notification.component.css']
})
export class CardsNotificationComponent implements OnInit {
  count=0;
  constructor(private yorumService:YorumService) {

   }

  ngOnInit(): void {
    this.yorumService.getAllYorums().subscribe(res=>{
      console.log(res);
      this.count=res.length;
    })
  }

}
