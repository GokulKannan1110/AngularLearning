import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  //When we add private keyword, TYPESCRIPT creates private property which can be accessed within the class
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit()
  {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#F1948A');
    this.renderer.addClass(this.element.nativeElement, 'container');
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'this is example div')
  }
}
