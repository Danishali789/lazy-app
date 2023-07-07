import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent {

  registration:FormGroup;

  constructor(private re:FormBuilder) { 
    this.registration=this.re.group({
     
      firstname:['',[Validators.required,Validators.minLength(8)]],
     
    })
  }

}
