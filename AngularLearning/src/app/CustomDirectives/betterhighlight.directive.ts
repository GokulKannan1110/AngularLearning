import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  constructor(private element: ElementRef,private renderer: Renderer2) { }

  @Input()  defaultColor: string = 'transparent';
  @Input('appBetterhighlight') highlightColor: string = 'pink';

  @HostBinding('style.background') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';
  
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
