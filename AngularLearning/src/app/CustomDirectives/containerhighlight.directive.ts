import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appContainerhighlight]'
})
export class ContainerhighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appContainerhighlight(condition: boolean)
  {
    if(condition)
    {
      this.renderer.addClass(this.element.nativeElement, 'highlight');
    }
  }
}
