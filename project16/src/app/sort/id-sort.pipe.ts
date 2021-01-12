import { Pipe, PipeTransform } from '@angular/core';
//сортировка по возрасту

@Pipe({
  name: 'idSort',
})
export class IdSortPipe implements PipeTransform {
  transform(items: { birthday: string }[], searchStr: number): any[] {
    if (searchStr === 3) {
      return items; //возвращаем весь массив
    } else {
      if (searchStr == 1) {
        //по убыванию
        items.sort(function (a, b) {
          //получаем минимальный и максимальный возраст и вычитаем их
          return (
            2021 -
            parseInt(a.birthday.split('-')[0]) -
            (2021 - parseInt(b.birthday.split('-')[0]))
          );
        });
      } else if (searchStr == 0) {
        //по возрастанию
        items.sort(function (a, b) {
          //получаем минимальный и максимальный возраст и вычитаем их
          return (
            2021 -
            parseInt(b.birthday.split('-')[0]) -
            (2021 - parseInt(a.birthday.split('-')[0]))
          );
        });
      }
      return items; //возвращаем весь массив
    }
  }
}
