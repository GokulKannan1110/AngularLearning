import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  ngAfterViewInit() {
    //console.log('DemoComponent is fully initialized.');
  }
  
  sayHello(): string 
  {
    console.log("Hi Hello!");
    return "Hello";
  }
}
