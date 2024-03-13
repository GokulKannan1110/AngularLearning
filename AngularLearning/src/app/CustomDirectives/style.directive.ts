import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  //When we use setter on property, we can use that property like a method. Internally it is a method, 
  //but we can write logic to set the value for the property 
  @Input() set setStyle(styles: Object){
    let entries =  Object.entries(styles);
    for(let [styleProperty, value] of entries)
    {
      this.renderer.setStyle(this.element.nativeElement,styleProperty, value);
    }
  }
}
