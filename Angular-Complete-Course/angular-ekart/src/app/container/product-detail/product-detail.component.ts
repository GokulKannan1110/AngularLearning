import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product!: Product;
  
  @Input()
  productListComp!: ProductListComponent;

  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }

  @Output()
  closeIconClicked: EventEmitter<boolean> = new EventEmitter;
  
  destroyProductDetail: boolean = false;
  closeProductDetail(){
    console.log('button clicked');
    this.destroyProductDetail = !this.destroyProductDetail
    this.closeIconClicked.emit(this.destroyProductDetail);
    console.log('event emitted');    
  }
}
