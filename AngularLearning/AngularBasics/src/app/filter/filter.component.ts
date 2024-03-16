import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})

//Implementing interfaces is not mandatory(the lifecycle hook methods still works)
// but it is a good practice to implement interfaces
export class FilterComponent implements OnInit{

  constructor(){
    console.log("Filter Comp Constructor Called!");
    // console.log(this.all);
    // console.log(this.available);
    // console.log(this.notAvailable);
  }

  //This is the only lifecycle hook that takes arguments.
  //Gets called for first time and everytime when there is a change
  ngOnChanges(change: SimpleChange)
  {
    // console.log("ngOnChanges called!");
    // console.log(change);
  }

  ngOnInit(){
    //console.log("Filter Comp ngOnInit Called!");
    // console.log(this.all);
    // console.log(this.available);
    // console.log(this.notAvailable);
  }

  //Gets called for every change detection cycle even if there is no change in input bound properties
  ngDoCheck(){
    //console.log("ngDoCheck Called!");
  }

  ngAfterContentInit()
  {
    //console.log("ngAfterContentInit Called!");
  }

  ngAfterContentChecked()
  {
    //console.log("ngAfterContentChecked Called!");
  }
 @Input() all: number = 0;
 @Input() available: number = 0;
 @Input() notAvailable: number = 0;

 selectedRadioButtonValue: string ='All';

 @Output()
 filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>;

 //Emits the value of the radio button value
 onRadioButtonSelectionChanged()
 {
  return this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  //console.log(this.selectedRadioButtonValue);
 }
}
