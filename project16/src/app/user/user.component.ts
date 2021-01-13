import { Component, Input, OnInit } from '@angular/core';
import { DbConnectService } from '../service/db-connect.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private dbConnectService: DbConnectService, private router: Router) {}

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
  routeTo(info: Data){
    this.router.navigate(['user/' + info.id],  { queryParams: info }); // Передресация на страницу с редактированием, и передача объекта пользователя
  }

  deleteUser(user: any) {
    //удаляет пользователя, передаем через user-list.html массив в эту функцию
    for (let i = 0; i < this.arr.length; i++) {
      //цикл по всему массиву
      if (user.id == this.arr[i].id) {
        //если id совпадает
        this.arr.splice(i, 1); //удаляем через splice
        this.dbConnectService.deleteWorkers(user.id); // Запрос к БД на удаление пользователя
        break;
      }
    }
  }
  
}
interface Data {
  id: number;
  surname: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  birthday: string;
  place: number;
}
