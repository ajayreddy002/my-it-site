import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faArrowAltCircleRight, faArrowRight, faEnvelope, faHome, faMobilePhone, faPhone, faPhoneAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { WebAppComponent } from './web-app/web-app.component';
import { faFacebook, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SaasAppComponent } from './saas-app/saas-app.component';
import { UxUiAppComponent } from './ux-ui-app/ux-ui-app.component';
import { ManualTestingComponent } from './manual-testing/manual-testing.component';
import { AutomationTestingComponent } from './automation-testing/automation-testing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeBannerComponent,
    AboutUsComponent,
    ServicesComponent,
    MobileAppComponent,
    WebAppComponent,
    DialogComponent,
    SaasAppComponent,
    UxUiAppComponent,
    ManualTestingComponent,
    AutomationTestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faAngleRight,
      faHome,
      faEnvelope,
      faPhone,
      faMobilePhone,
      faArrowRight,
      faPlus,
      faFacebook,
      faTwitter,
      faInstagram,
      faFacebookF,
      faArrowRight
    )
  }
}
