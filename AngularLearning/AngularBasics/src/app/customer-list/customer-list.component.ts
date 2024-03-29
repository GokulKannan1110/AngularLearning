import { Component } from '@angular/core';
import { Customer } from './customer';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
  //providers: [EnrollService]
})
export class CustomerListComponent {

  //Here we are telling angular that we need the instance of the EnrollService class, 
    //Angular injects this instance. But it doesn't know how to create it, for that we use this providers property in the decorator.
    constructor(private enrollService: EnrollService)
    {
      
    }

  selectedCustomer: Customer;
  customers: Customer[] = [
    {customerNo: 1, name: 'Mark Vought', address: '', city: 'London', country: 'UK'},
    {customerNo: 2, name: 'John Smith', address: '', city: 'New York', country: 'USA'},
    {customerNo: 3, name: 'Merry Ann', address: '', city: 'Berlin', country: 'Germany'},
    {customerNo: 4, name: 'Rajesh Khatri', address: '', city: 'Mumbai', country: 'India'},
    {customerNo: 5, name: 'Rahul Raj', address: '', city: 'Delhi', country: 'India'}
  ];

  OnSelect()
  {
    //const enrollService = new EnrollService();
    this.enrollService.OnEnrollClicked(this.selectedCustomer.name)
  }
}
