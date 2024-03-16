import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  //Inorder to create structural directive, we need two things
  //1.What to add or remove 
  //2.From Where to add or remove
  //When we use an attribute directive on an html element, we would get a reference to that element in the constructor.
  // We need that reference for structual dir as well. but along with that we also need the container on which our view is present.
  //1st parameter template is nothing but the view on which we have used the structural directive.
  //2nd parameter is the container inside which the view will be added or removed.
  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input("appIf") set displayView(condition : boolean)
  {
    if(condition)
    {
      this.viewContainer.createEmbeddedView(this.template);
    }
    else{
      this.viewContainer.clear();
    }
  }
}
