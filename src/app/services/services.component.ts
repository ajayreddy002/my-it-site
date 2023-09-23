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
      img:'web-development.png',
      url:'/web-app'
    },
    {
      title:'Mobile App Development',
      description:'In Varcas Info we build Mobile applications according to client requirement.',
      img:'mobile-app.jpeg',
      url:'/mobile-app'
    },
    {
      title:'SaaS Development',
      description:'Convert data noise to intelligent insights for competitive differention quality.',
      img:'sass-development.jpeg',
      url:'/web-app'
    },
    {
      title:'UX/UI Design',
      description:'In Varcas Info we do design the UX/UI according to client requirement.',
      img:'ux-ui-design.jpeg',
      url:'/web-app'
    },
    {
      title:'Manual Testing',
      description:'In Varcas Info we do Manual test of web and mobile application and will do Regression Testing and write Test cases.',
      img:'Manual-testing.jpeg',
      url:'/web-app'
    },
    {
      title:'Automation Testing',
      description:'In Varcas Info we will write automated scripting for Test Senarios.',
      img:'Automation_Testing.jpeg',
      url:'/web-app'
    },
  ]
}
