import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText : string = '';

  //optional 2nd argument of @ViewChild
  //1. read: Use it to read the different token from the queried elements.
  //2. static: Determine when the query is resolved
  //           True is when the view is initialized (before the first change detection) for the first time
  //           False if you want it to be resolved after every change detection 
  @ViewChild('searchInput') searchInputElement !: ElementRef;

  updateSeacrhText(event: any){
    this.searchText = event.target.value;
  }

  // updateSeacrhTextFromButton(element: HTMLInputElement){
  //   this.searchText = element.value;
  //   this.searchTextChanged.emit(this.searchText)
  // }
 
  //Here, Getting the element using ViewChild prop
  updateSeacrhTextFromButton(){
    this.searchText = this.searchInputElement.nativeElement.value;
    this.searchTextChanged.emit(this.searchText)
  }

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged()
  {
    this.searchTextChanged.emit(this.searchText);
  }
}
