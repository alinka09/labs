import { Pipe, PipeTransform } from '@angular/core';

//сортировка по id

@Pipe({
  name: 'ageSort',
})
export class AgeSortPipe implements PipeTransform {
  transform(items: { id: number }[], searchStr: number): any[] {
    if (searchStr === 3) {
      return items; //все возвращает
    } else {
      if (searchStr == 1) {
        //по убыванию
        items.sort(function (a, b) {
          return a.id - b.id;
        });
      } else if (searchStr == 0) {
        //по возрастанию
        items.sort(function (a, b) {
          return b.id - a.id;
        });
      }
      return items;
    }
  }
}
