import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;

  @Output()
  selectedRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  
  filterChanged()
  {
    this.selectedRadioButtonChanged.emit(this.selectedRadioButton)
  }
  selectedRadioButton : string = 'all';
}
