import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-product',
  templateUrl: './content-product.component.html',
  styleUrl: './content-product.component.css'
})
export class ContentProductComponent {

  //Accessing html elements of parent component from child component class
  @ContentChild('iPhoneTitle') iPhoneTitle: ElementRef;
  ngOnInit()
  {
    console.log(this.iPhoneTitle);
  }

  ngAfterContentInit(){
    console.log('element is - ');
    if(this.iPhoneTitle)
    {
      console.log(this.iPhoneTitle.nativeElement.textContent);
    }
  }
}
