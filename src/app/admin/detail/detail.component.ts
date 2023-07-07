import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdmindataService } from 'src/app/services/admindata.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  adminid:any;
  admin:any;
  constructor(private activatedRoute:ActivatedRoute,private service:AdmindataService){}

  ngOnInit():void{
    this.adminid=this.activatedRoute.snapshot.paramMap.get('id');
    this.admin=this.service.admin().find(x=>x.id==this.adminid);

  }

}
