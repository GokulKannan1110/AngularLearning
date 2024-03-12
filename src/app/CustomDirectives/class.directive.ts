import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2 ) { }
  //To us the directive selector as the attribute like [ngClass], either we can specify the alias for the 
  //below property as same as the selector(appClass) or we can name the property itself same as the selector 
  //we are going to bind this property and we would receive the value. So if we use set, we can use this as a method which gets the key value pairs 
  @Input('appClass') set display(value: object) {
    let entries = Object.entries(value);

    //Without De-structuring the array
    // for(let entry of entries)
    // {
    //   if(entry[1]){
    //     this.renderer.addClass(this.element.nativeElement, entry[0])
    //   }
    // }

    //De-structuring the array
    for(let [className, condition] of entries)
    {
      if(condition){
        this.renderer.addClass(this.element.nativeElement, className)
      }
    }
  }
}
