import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isCollapsed = true;
  public isScrollTop = true
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { 
    window.scrollTo(0,0)
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      this.isScrollTop = true;
    } else {
      this.isScrollTop = false;
    }
  }
}
