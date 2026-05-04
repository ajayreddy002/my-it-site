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
    path: 'home', component: HomeComponent,
    data: {
      title: 'Home page | varcas info systems',
      description: 'We stand out as a top and more reputed Software Development Company in India by creating unique digital experiences and strategies.'
    },
    title: 'Home page | varcas info systems',
  },
  {
    path: 'about-us', component: AboutUsComponent, title: 'About us page | varcas info systems',
    data: { description: 'We, Varcas Info Systems India Pvt Ltd., established in the year 2021 is moving forward by delivering unlimited services to the clients in unanimous way. We are mainly positioning the prime regions in the city as well. We are also an ISO 9001:2015 certified organization with successful completion of these years.' }
  },
  {
    path: 'services', component: ServicesComponent, title: 'Services page | varcas info systems',
    data: { description: 'We have a full-fledged team to make your business with best digital presence and create an important factor for branding purpose' }
  },
  {
    path: 'web-app', component: WebAppComponent, title: 'web-application page | varcas info systems',
    data: { description: 'Varcas Info Systems India Pvt Ltd is considered as the Top Web Development Companies in Hyderabad which will help to create future-rich and fast performing web software with unique user experience. We have a bunch of team experts for delivering the corporate and custom facing websites or web apps in time.Best Web Development Company in UK, US, Australia as well that deliver services in time' }
  },
  {
    path: 'mobile-app', component: MobileAppComponent, title: 'Mobile-application page | varcas info systems',
    data: { description: 'Mostly, 10% of people around the world check their mobile phones for every 4 minutes.However, the Mobile App Development Company in India is rapidly growing.Varcas Info Systems India Pvt Ltd is considered as the Best Mobile App Development Company in Canada, US, UK, Australia and Hyderabad that provides a unique design interface.' }
  },
  {
    path: 'saas-app', component: SaasAppComponent, title: 'Saas-application page | varcas info systems',
    data: { description: 'If you prefer to have a consistent revenue stream then it is better to choose the Saas model for your software offerings. Our Saas Application Development Team experts are here to deliver a product that is scalable, lighting-fast and secure and also provides a sustainable license-based pricing model. All our unique solutions are well made with high performance and smooth UI/UX design' }
  },
  {
    path: 'ux-ui-app', component: UxUiAppComponent, title: 'UI/UX-application page | varcas info systems',
    data: { description: 'In the current digital era, the demand for UI/UX designers has skyrocketed in the modern world as it is considered as the important elements in the design and development od digital products. Generally, UI means User Interface that refers to the visual and interactive aspects where users can interact with directly, including buttons, menus and layout. The team experts mainly focus on pleasing and user-friendly interface. Varcas Info Systems India Pvt Ltd-The Best UI/UX Designing Company in US, UK, Canada, Australia and India' }
  },
  {
    path: 'manual-testing', component: ManualTestingComponent, title: 'Manual-Testing-application page | varcas info systems',
    data: { description: 'Varcas Info Systems India Pvt Ltd-The Best Manual Testing Company in Hyderabad.Manual Testing Service Providers in Hyderabad are a lot in demand these days as it provides flexibility throughout the QA process. It mainly allows the testers to find critical bugs using their experience and critical thinking. With the help of Manual Testing, the QA testers will have an direct interaction with the software and make sure that it is working as required.' }
  },
  {
    path: 'automation-testing', component: AutomationTestingComponent, title: 'Automation-Testing-application page | varcas info systems',
    data: { description: 'We, the Varcas Info Systems India Pvt Ltd is considered as the best Custom Automation Testing Company in Hyderabad that delivers state-of-art development services to industry leaders with spot-on technology.It mainly allows the testers to find critical bugs using their experience and critical thinking.' }
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
