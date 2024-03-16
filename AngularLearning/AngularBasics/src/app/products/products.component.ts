import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  //providers:[EnrollService]
})
export class ProductsComponent {

    //Here we are telling angular that we need the instance of the EnrollService class, 
    //Angular injects this instance. But it doesn't know how to create it, for that we use this providers property in the decorator.
    constructor(private enrollService: EnrollService)
    {
      
    }
    title: string = "Products Component" ;
    products =[
      {id:1,name:'Minimalist Watch',availabilty:'Available',price:'109', color:'Blue'},
      {id:2,name:'Apple Earbuds',availabilty:'Not Available',price:'3339', color:'White'},
      {id:3,name:'Apple TV',availabilty:'Available',price:'5555', color:'Black'},
      {id:4,name:'LG Refrigerator',availabilty:'Not Available',price:'4999', color:'Grey'},
      {id:5,name:'Dell Inspiron',availabilty:'Available',price:'6999', color:'Black'},
    ];
    courseCountRadioButton: string = 'All';
    searchText: string = '';
    getTotalProducts()
    {
      return this.products.length;
    }

    getAvailableProducts()
    {
      return this.products.filter(product => product.availabilty == 'Available').length;
    }

    getNotAvailableProducts()
    {
      return this.products.filter(product => product.availabilty == 'Not Available').length;
    }
    
    onFilterRadioButtonChanged(data: string)
    {      
      this.courseCountRadioButton = data;
      
      console.log(data);
    }

    onSearchTextEntered(searchValue: string){
      this.searchText = searchValue;
      console.log(this.searchText);
    }

    OnClickBuyNow()
    {
      //const enrollService = new EnrollService();
      this.enrollService.OnEnrollClicked(this.title);
    }
}
