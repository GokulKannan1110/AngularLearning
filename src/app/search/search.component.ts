import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchValue: string = '';
  //currently in this filethis is not used
  changeSearchValue(eventData : Event){
    //console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

  //Child component to parent component
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged()
  {
    this.searchTextChanged.emit(this.searchValue)
  }

  sayHello(inputElement: HTMLInputElement)
  {
    alert('Hello '+inputElement.value);
  }
}
