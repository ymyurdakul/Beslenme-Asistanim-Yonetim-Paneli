import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Gida } from 'src/models/gida';
import { Kullanici } from 'src/models/kullanici';
import Swal from 'sweetalert2';
import { GidaService } from '../services/gida.service';

@Component({
  selector: 'app-gidas',
  templateUrl: './gidas.component.html',
  styleUrls: ['./gidas.component.css']
})
export class GidasComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 /* id: number;
  ad: string;
  kalori: string;
  karbonhidrat: string;
  lif: string;
  protein: string;
  yag: string;
  kolestrol: string;
  aVitamini: string;
  cVitamini: string;
  potasyum: string;
  kalsiyum: string;
  demir: string;
*/
  displayedColumns: string[] = ['ad', 'kalori', "karbonhidrat", "lif", "protein", "yag", "kolestrol", "aVitamini",
  "cVitamini","potasyum","kalsiyum","demir","action"];
  data: Gida[] = null;
  dataSource: MatTableDataSource<Gida>;
  constructor(private gida_service:GidaService) { }

  ngOnInit(): void {
    this.gida_service.getAllGidas().subscribe(res=>{
      this.data = res;
      this.dataSource = new MatTableDataSource<Gida>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  showImage(gida){
    console.log(gida);
    Swal.fire({
      title: gida.ad,
      text: gida.kalori,
      imageUrl: 'http://mustafayurdakul.net.tc//assets/resimler/'+gida.ad+".png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',

    });
  }
}
