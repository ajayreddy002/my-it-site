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
      description:'Convert data noise to intelligent insights for competitive differention quality.',
      img:'mobile-app.png',
      url:'/web-app'
    },
    {
      title:'Mobile App Development',
      description:'Convert data noise to intelligent insights for competitive differention quality.',
      img:'mobile-app.png',
      url:'/mobile-app'
    },
    {
      title:'Wed App Development',
      description:'Convert data noise to intelligent insights for competitive differention quality.',
      img:'mobile-app.png',
      url:'/web-app'
    },
    {
      title:'Wed App Development',
      description:'Convert data noise to intelligent insights for competitive differention quality.',
      img:'mobile-app.png',
      url:'/web-app'
    },
  ]
}
