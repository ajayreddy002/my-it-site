import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  serviceList = [
    {
      title: 'Wed App Development',
      description: 'We considered as the Top Web Development Companies in Hyderabad which will help to create future-rich and fast performing web software with unique user experience.',
      img: 's1.png',
      url: '/web-app',
      hoverImg: 's1hover.png',
    },
    {
      title: 'Mobile App Development',
      description: 'Mostly, 10% of people around the world check their mobile phones for every 4 minutes. At least half of the time in a day is spend with digital media over the mobile.',
      img: 'mobile-app.png',
      url: '/mobile-app',
      hoverImg: 'mobile-app-hover.png',
      hoverClassName: 'b-bg'
    },
    {
      title: 'SaaS Development',
      description: 'Convert data noise to intelligent insights for competitive differention quality.',
      img: 'saas.png',
      url: '/web-app',
      hoverImg: 'saas-hover.png',
      hoverClassName: 'y-bg'
    },
    {
      title: 'UX/UI Design',
      description: 'We are considered as the top most company for delivering the extraordinary UI/UX designing services to clients with friendly budget and in-time delivery.',
      img: 'ux-design-hover.png',
      url: '/web-app',
      hoverImg: 'ux-design.png',
      hoverClassName: 'green-bg'
    },
    {
      title: 'Manual Testing',
      description: 'We are considered as the best Manual Testing Company in US, UK and Canada that delivers the services with best functionality and design.',
      img: 'manual-test.png',
      url: '/web-app',
      hoverImg: 'manual-test-hover.png',
      hoverClassName: 'pink-bg'
    },
    {
      title: 'Automation Testing',
      description: 'In Varcas Info we will write automated scripting for Test Senarios.',
      img: 'selenium-blue.svg',
      url: '/web-app',
      hoverImg: 'selenium-hover.png',
      hoverClassName: 'db-bg'
    },
  ]
}
