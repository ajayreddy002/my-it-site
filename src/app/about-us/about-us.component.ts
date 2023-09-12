import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  socialShareToogle = false;
  toggleChange(event: any){
    this.socialShareToogle = event.target.checked
  }
}
