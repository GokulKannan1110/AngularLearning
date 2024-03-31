import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackgroundDirective {

  
  //Angular injects the reference of that element on which this directive is used.- 
  //that is angular is injecting an instance of dependency inside this SetBackgroundDirective class - Dependency Injection
  constructor(private element: ElementRef, private renderer: Renderer2) 
  {    

  }

  // @Input('appSetBackground') backColor: string = 'red';
  // @Input() textColor: string = 'white';

  @Input('appSetBackground') changeTextandBackColor!: {backColor: string, textColor: string};
  ngOnInit()
  {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextandBackColor.backColor);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextandBackColor.textColor);
  }
}
