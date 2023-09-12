import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { WebAppComponent } from './web-app/web-app.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, title: 'Home page'
  },
  {path: 'about-us', component: AboutUsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'web-app', component: WebAppComponent},
  {path: 'mobile-app', component: MobileAppComponent},
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
