import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BildirimlerComponent } from './bildirimler/bildirimler.component';
import { GidasComponent } from './gidas/gidas.component';
import { HomeComponent } from './home/home.component';
import { KullanicilarComponent } from './kullanicilar/kullanicilar.component';
import { ProfilComponent } from './profil/profil.component';
import { YorumsComponent } from './yorums/yorums.component';


const routes: Routes = [
  { path: "kullanicilar", component: KullanicilarComponent },
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfilComponent },
  {path:"yorum",component:YorumsComponent},
  {path:"bildirimler",component:BildirimlerComponent},
  {path:"gidas",component:GidasComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
