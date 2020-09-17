import { Component, OnInit } from '@angular/core';
import { Yorum } from 'src/models/yorum';
import { YorumService } from '../services/yorum.service';

@Component({
  selector: 'app-bildirimler',
  templateUrl: './bildirimler.component.html',
  styleUrls: ['./bildirimler.component.css']
})
export class BildirimlerComponent implements OnInit {
  bildirims:Yorum[];
  constructor(private y_service:YorumService) { }

  ngOnInit(): void {
    this.y_service.getAllYorums().subscribe(res=>{
     this.bildirims= res.filter(x=>x.yorumdetay.includes("tel:"));
    this.bildirims= this.bildirims.map<Yorum>(x=>{x.yorumdetay.replace("tel","");return x; });
    })
  }

}
