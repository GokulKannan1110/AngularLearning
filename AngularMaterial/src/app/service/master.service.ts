import { Injectable } from '@angular/core';
import { ColorEntity } from '../Entity/colorentity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private httpClient:HttpClient) { }

  GetColorList():ColorEntity[]{
    return [
      {code: 'c0', name: 'Black'},      
      {code: 'c1', name: 'Red'},
      {code: 'c2', name: 'Yellow'},
      {code: 'c3', name: 'Blue'},
      {code: 'c4', name: 'White'}       
    ]
  }

  GetCustomer(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer");
  }
}
