import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MasterService } from '../../service/master.service';
import { ColorEntity } from '../../Entity/colorentity';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent implements OnInit {

  optionsArray: string[] = ['Red', 'Yellow', 'Blue'];
  filterOptions!: Observable<string[]>;
  formControl = new FormControl('');
  colorArrayList!: ColorEntity[];
  filterOptionsList!: Observable<ColorEntity[]>;
  
  constructor(private masterService : MasterService){
    this.colorArrayList = masterService.GetColorList();
  }

  ngOnInit(): void {
    // this.filterOptions = this.formControl.valueChanges.pipe(
    //   startWith(''), map(value => this._FILTER(value || ''))
    // )

    this.filterOptionsList = this.formControl.valueChanges.pipe(
      startWith(''), map(value => this._LISTFILTER(value || ''))
    ) 
  }

  private _FILTER(value: string): string[] {
    const searchValue = value.toLocaleLowerCase();
    return this.optionsArray.filter(option => option.toLocaleLowerCase().includes(searchValue));
  }

  private _LISTFILTER(value: string): ColorEntity[] {
    const searchValue = value.toLocaleLowerCase();
    return this.colorArrayList.filter(option => (option.name.toLocaleLowerCase().includes(searchValue) || 
    option.code.toLocaleLowerCase().includes(searchValue)));
  }
}
