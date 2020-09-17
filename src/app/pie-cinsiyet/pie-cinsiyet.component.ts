import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { kMaxLength } from 'buffer';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Kullanici } from 'src/models/kullanici';
import { KullaniciService } from '../services/kullanici.service';

@Component({
  selector: 'app-pie-cinsiyet',
  templateUrl: './pie-cinsiyet.component.html',
  styleUrls: ['./pie-cinsiyet.component.css']
})
export class PieCinsiyetComponent implements OnInit {
  isDataLoaded=false;
  toplamKullanici=0;
  constructor(private k_service:KullaniciService) {

   }
  public pieChartLabels: Label[] = ["Erkek", "Kadın"];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  public pieChartColors = [
    {
      backgroundColor: ['blue', 'red'],
    },
  ];


  ngOnInit(): void {
    this.k_service.getAllKullanici().subscribe(res=>{
      console.log(res);
      this.isDataLoaded=true;
      var totalLen=res.length;
      var k_count=res.filter(x=>x.cinsiyet==false).length;
      var e_count=totalLen-k_count;
      this.toplamKullanici=totalLen;
      this.pieChartData.push(e_count);
      this.pieChartData.push(k_count);
    },err=>{
      console.log(err);
    })
  }

}
