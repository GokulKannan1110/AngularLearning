import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../Models/Student';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], ...args: any[]): any {
    //console.log('Filter Pipe Called!');
    if(args[0].toLowerCase() === 'all' || args[0] === '' || list.length === 0){
        return list;
    }
    else{
      return list.filter((std) => {
        return std.gender.toLowerCase() === args[0].toLowerCase();
      })
    }
  }

}
