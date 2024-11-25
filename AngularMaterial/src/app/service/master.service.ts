import { Injectable } from '@angular/core';
import { ColorEntity } from '../Entity/colorentity';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  GetColorList():ColorEntity[]{
    return [
      {code: 'c0', name: 'Black'},      
      {code: 'c1', name: 'Red'},
      {code: 'c2', name: 'Yellow'},
      {code: 'c3', name: 'Blue'},
      {code: 'c4', name: 'White'}       
    ]
  }
}
