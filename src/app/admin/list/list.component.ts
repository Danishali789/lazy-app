import { Component } from '@angular/core';
import { AdmindataService } from 'src/app/services/admindata.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  Admin:Array<any>=[];


  constructor(private admindata:AdmindataService)
  {
    console.warn("admindata",admindata);
    this.Admin=admindata.admin();
  }

}
