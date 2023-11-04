import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { WebAppComponent } from './web-app/web-app.component';
import { SaasAppComponent } from './saas-app/saas-app.component';
import { UxUiAppComponent } from './ux-ui-app/ux-ui-app.component';
import { ManualTestingComponent } from './manual-testing/manual-testing.component';
import { AutomationTestingComponent } from './automation-testing/automation-testing.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, title: 'Home page'
  },
  {path: 'about-us', component: AboutUsComponent, title: 'About page'},
  {path: 'services', component: ServicesComponent, title: 'Services page'},
  {path: 'web-app', component: WebAppComponent, title: 'web-application page'},
  {path: 'mobile-app', component: MobileAppComponent, title: 'Mobile-application page'},
  {path: 'saas-app', component: SaasAppComponent, title: 'Saas-application page'},
  {path: 'ux-ui-app', component: UxUiAppComponent, title: 'UI/UX-application page'},
  {path: 'manual-testing', component: ManualTestingComponent, title: 'Manual-Testing-application page'},
  {path: 'automation-testing', component: AutomationTestingComponent, title: 'Automation-Testing-application page'},
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
