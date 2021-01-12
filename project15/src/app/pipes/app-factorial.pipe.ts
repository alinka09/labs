import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFactorial', //имя
})
export class AppFactorialPipe implements PipeTransform {
  //передаем
  transform(
    items: { name: string; surname: string }[], //берем переменные для фильтрации из worker
    searchStr: string,
    familia: string
  ): any[] {
    //массив из бд передаются в items
    if (searchStr === '' && familia === '') {
      //если обе строки пустые
      return items; //возвращаем полность весь массив данных
    } else {
      //иначе
      let filteredItems = []; //создаем пустой массив для отфильтрованных значений
      for (let i = 0; i < items.length; i++) {
        //цикл прогоняем по всем объектам в массиве из бд
        if (
          items[i].name.toLowerCase().includes(searchStr.toLowerCase()) &&
          items[i].surname.toLowerCase().includes(familia.toLowerCase())
        ) {
          //обращаемся к определенному элементу итерации, include - проверяет содержание текста, которое мы ввели в строке массива, после переводим в нижний регистр
          filteredItems.push(items[i]); //если все ок, то добавляем в массив
        }
      }
      return filteredItems; //возвращаем массив
    }
  }
}
