import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

  constructor() { }

  admin()
  {
    return[
    { id: 12, name: 'Dr. Nice',city:'chandigarh',state:'haryana'},
    { id: 13, name: 'Dr. john',city:'chandigarh',state:'haryana'},
    { id: 14, name: 'Dr. wick',city:'chandigarh',state:'haryana'},
    { id: 15, name: 'Dr. Nice',city:'chandigarh',state:'haryana'}
   
  ]
}
}
