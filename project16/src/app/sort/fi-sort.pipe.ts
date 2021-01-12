import { Pipe, PipeTransform } from '@angular/core';

//сортировка по фамилии

@Pipe({
  name: 'fiSort',
})
export class FiSortPipe implements PipeTransform {
  transform(
    items: { name: string; surname: string }[],
    searchStr: string
  ): any[] {
    if (searchStr === '') {
      //если пусто
      return items; //возвращаем массив с объектами
    } else {
      //иначе
      let filteredItems = []; //создаем пустой массив
      for (let i = 0; i < items.length; i++) {
        if (
          (
            items[i].name.toLowerCase() +
            ' ' +
            items[i].surname.toLowerCase()
          ).includes(searchStr.toLowerCase()) ||
          (
            items[i].surname.toLowerCase() +
            ' ' +
            items[i].name.toLowerCase()
          ).includes(searchStr.toLowerCase())
        ) {
          //складываем имя и фамилию и преобразуем их в нижний регистр, при помощи include сопоставляем с веденными значениями
          filteredItems.push(items[i]); //добавляем в массив
        }
      }
      return filteredItems; //возвращаем массив
    }
  }
}
