import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { element } from 'protractor';
import { Kullanici } from 'src/models/kullanici';
import Swal from 'sweetalert2';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { NewUserComponent } from '../new-user/new-user.component';
import { KullaniciService } from '../services/kullanici.service';

@Component({
  selector: 'app-kullanicilar',
  templateUrl: './kullanicilar.component.html',
  styleUrls: ['./kullanicilar.component.css']
})
export class KullanicilarComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['ad', 'soyad', "email", "cinsiyet", "mevcutKilo", "hedefKilo", "dogumTarihi", "actions"];
  data: Kullanici[] = null;
  dataSource: MatTableDataSource<Kullanici>;


  constructor(private k_service: KullaniciService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.ngAfterViewInit();

  }

  ngAfterViewInit() {

    this.k_service.getAllKullanici().subscribe(res => {
      this.data = res;
      this.dataSource = new MatTableDataSource<Kullanici>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  showUser(element) {
    console.log(element);
    this.dialog.open(DialogUserComponent, { data: element });
  }
  showEditUser(element) {
    this.dialog.open(DialogEditUserComponent, { data: element });

  }
  deleteUser(k: Kullanici) {
    Swal.fire({
      title: 'Kullanıcıyı silmek istiyormusunuz ?',
      text: "Kullanıcı uygulamaya erişemeyecktir.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet',

    }).then((result) => {
      if (result.isConfirmed) {
        this.k_service.deleteKullanici(k).subscribe(res => {
          Swal.fire(
            'Silindi!',
            'Seçmiş olduğunuz kullanıcı silindi.',
            'success'
          );
          this.ngOnInit();
        },err=>{
          console.log(err);
        })

      }
    })
  }
  newUser()
  {
    this.dialog.open(NewUserComponent);
    this.ngOnInit();
  }


}
