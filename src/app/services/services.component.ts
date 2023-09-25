import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  serviceList = [
    {
      title:'Wed App Development',
      description:'In Varcas Info we build websites and applications according to client requirement.',
      img:'s1.png',
      url:'/web-app',
      hoverImg: 's1hover.png',
    },
    {
      title:'Mobile App Development',
      description:'In Varcas Info we build Mobile applications according to client requirement.',
      img:'mobile-app.png',
      url:'/mobile-app',
      hoverImg: 'mobile-app-hover.png',
      hoverClassName: 'b-bg'
    },
    {
      title:'SaaS Development',
      description:'Convert data noise to intelligent insights for competitive differention quality.',
      img:'saas.png',
      url:'/web-app',
      hoverImg: 'saas-hover.png',
      hoverClassName: 'y-bg'
    },
    {
      title:'UX/UI Design',
      description:'In Varcas Info we do design the UX/UI according to client requirement.',
      img:'ux-design-hover.png',
      url:'/web-app',
      hoverImg: 'ux-design.png',
      hoverClassName: 'green-bg'
    },
    {
      title:'Manual Testing',
      description:'In Varcas Info we do Manual test of web and mobile application and will do Regression Testing and write Test cases.',
      img:'manual-test.png',
      url:'/web-app',
      hoverImg: 'manual-test-hover.png',
      hoverClassName: 'pink-bg'
    },
    {
      title:'Automation Testing',
      description:'In Varcas Info we will write automated scripting for Test Senarios.',
      img:'selenium-blue.svg',
      url:'/web-app',
      hoverImg: 'selenium-hover.png',
      hoverClassName: 'db-bg'
    },
  ]
}
