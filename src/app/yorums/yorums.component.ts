import { Component, OnInit } from '@angular/core';
import { Yorum } from 'src/models/yorum';
import { YorumService } from '../services/yorum.service';

@Component({
  selector: 'app-yorums',
  templateUrl: './yorums.component.html',
  styleUrls: ['./yorums.component.css']
})
export class YorumsComponent implements OnInit {

  constructor(private yorum_Service:YorumService) { }
  yorums:Yorum[];
  ngOnInit(): void {
    this.yorum_Service.getAllYorums().subscribe(res=>{
      this.yorums=res;
    })
  }

}
