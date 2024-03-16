import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  constructor(private element: ElementRef,private renderer: Renderer2) { }

  @Input()  defaultColor: string = 'transparent';
  @Input('appBetterhighlight') highlightColor: string = 'pink';

  //This @HostBinding decorator binds the host element's property 
  //to a variable/property in the directive or component
  @HostBinding('style.background') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';
  
  //This decorator listens to the DOM event on the host element and 
  //reacts to that event by executing an event handler method
  @HostListener('mouseenter') mouseenter(){
    this.background = this.highlightColor
    this.border='red 2px solid'
  }

  @HostListener('mouseleave') mouseleave(){
    this.background = this.defaultColor;
    this.border='none'
  }

  ngOnInit(){
    this.background = this.defaultColor;
  }
}
