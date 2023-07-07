import { Component } from '@angular/core';
import {AdmindataService} from './services/admindata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-app';
  Admin:any;

  constructor(private admindata:AdmindataService)
  {
    // console.warn("admindata",admindata);
    this.Admin=admindata.admin();
  }
}
