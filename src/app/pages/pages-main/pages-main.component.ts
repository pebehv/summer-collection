import { Component } from '@angular/core';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-pages-main',
  templateUrl: './pages-main.component.html',
  styleUrls: ['./pages-main.component.css']
})
export class PagesMainComponent {

}
