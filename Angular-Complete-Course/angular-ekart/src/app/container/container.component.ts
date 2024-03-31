import { Component, Input, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  //name="John Smith";

  //Here the actual component name can also be passed as argument like this, instead of passing the template ref variable
  @ViewChild(ProductListComponent) productListComponent!: ProductListComponent;

  addToCart:number = 0;
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event: any){
    //this.name = event.target.value;
    //console.log(event.target.value);
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
    
  }

  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }  
    
  }

 
  searchText: string = '';
  setSearchText(value: string)
  {
    this.searchText = value;
  }

  destroyProductDetail: boolean = false;
  closeProductDetail(isdisplay: boolean)
  {
    this.destroyProductDetail = isdisplay;
  }

  OnProductClicked(destroy: boolean)
  {
    this.destroyProductDetail = destroy;
  }
}
