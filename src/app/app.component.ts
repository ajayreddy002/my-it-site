import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'varcas-info';
  constructor(
    private metaTagService: Meta,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }
  async ngOnInit() {
    const data = await this.activatedRoute.data.toPromise();
    if (data) {
      this.title = data['title'];
      const description = data['description'];
      this.titleService.setTitle(this.title);
      this.metaTagService.updateTag({ name: 'description', content: description });
    }
  }
}
