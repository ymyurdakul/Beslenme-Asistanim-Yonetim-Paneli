import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Kullanici } from 'src/models/kullanici';
import { KullaniciService } from '../services/kullanici.service';

@Component({
  selector: 'kullanicitablo',
  templateUrl: './kullanicitablo.component.html',
  styleUrls: ['./kullanicitablo.component.css']
})
export class KullanicitabloComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['ad', 'soyad',"email","cinsiyet"];
  data:Kullanici[]=null;
  dataSource :MatTableDataSource<Kullanici>;


  constructor(private k_service:KullaniciService) {

  }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit(){

    this.k_service.getAllKullanici().subscribe(res=>{
      this.data=res;
      this.dataSource =new MatTableDataSource<Kullanici>(this.data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort = this.sort;

    });

  }

}
