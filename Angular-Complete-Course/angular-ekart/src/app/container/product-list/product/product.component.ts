import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductListComponent } from '../product-list.component';
import { Product } from '../../../Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productlist : ProductListComponent = new ProductListComponent();
  @Input()
  product !: Product; 
  
}
