import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatBadgeModule} from '@angular/material/badge'
import {MatMenuModule} from '@angular/material/menu';
import {ChartsModule} from 'node_modules/ng2-charts';
import { PieCinsiyetComponent } from './pie-cinsiyet/pie-cinsiyet.component'
import {HttpClientModule} from '@angular/common/http';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { KullanicitabloComponent } from './kullanicitablo/kullanicitablo.component'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { CardsComponent } from './cards/cards.component';
import { CardsGidaComponent } from './cards-gida/cards-gida.component';
import { CardsNotificationComponent } from './cards-notification/cards-notification.component';
import { CardsDetailComponent } from './cards-detail/cards-detail.component'
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { KullanicilarComponent } from './kullanicilar/kullanicilar.component';
import { HomeComponent } from './home/home.component';
import { DialogUserComponent } from './dialog-user/dialog-user.component'
import {MatDialogModule} from '@angular/material/dialog'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {MatCardModule} from '@angular/material/card';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { ProfilComponent } from './profil/profil.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { YorumsComponent } from './yorums/yorums.component';
import { BildirimlerComponent } from './bildirimler/bildirimler.component';
import { GidasComponent } from './gidas/gidas.component';

@NgModule({
  declarations: [
    AppComponent,
    PieCinsiyetComponent,
    HomeIntroComponent,
    KullanicitabloComponent,
    CardsComponent,
    CardsGidaComponent,
    CardsNotificationComponent,
    CardsDetailComponent,
    KullanicilarComponent,
    HomeComponent,
    DialogUserComponent,
    DialogEditUserComponent,
    NewUserComponent,
    ProfilComponent,
    YorumsComponent,
    BildirimlerComponent,
    GidasComponent,
   ],
  imports: [
    MatStepperModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
     MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    ChartsModule,
    MatMenuModule,
    MatBadgeModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
