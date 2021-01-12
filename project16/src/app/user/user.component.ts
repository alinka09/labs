import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}

  @Input() info: any; //передаем инфу о пользовактелями

  @Input() arr: any; //передаем массив пользователей

  ngOnInit(): void {}

  getNamePlace() {
    //преобразуем id отдела в назвавние отдела
    let name;
    switch (this.info.place) {
      case 0:
        name = 'IT отдел';
        break;
      case 1:
        name = 'Отдел продаж';
        break;
      case 2:
        name = 'Отдел доставки';
        break;
      case 3:
        name = 'Юридический отдел';
        break;
    }
    return name;
  }

  getUserAge() {
    //
    return 2021 - this.info.birthday.split('-')[0]; //возвращает возраст пользователя
  }
  deleteUser(user: any) {
    //удаляет пользователя, передаем через user-list.html массив в эту функцию
    for (let i = 0; i < this.arr.length; i++) {
      //цикл по всему массиву
      if (user.id == this.arr[i].id) {
        //если id совпадает
        this.arr.splice(i, 1); //удаляем через splice
        break;
      }
    }
  }
}
