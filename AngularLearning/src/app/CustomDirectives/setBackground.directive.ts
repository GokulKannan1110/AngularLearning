import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[setBackground]' //To use this as attribute
})

export class setBackgroundDirective implements OnInit
{
    //private element : ElementRef = {} as ElementRef;
    //On whichever element we will use this attribute directive, that element will be passed to thie constructor
    
    //Behind the scene, angular creates the private property element
    constructor(private element: ElementRef){
        this.element = element;
    }

    ngOnInit()
    {
        this.element.nativeElement.style.backgroundColor = '#C8E6C9';
    }
}