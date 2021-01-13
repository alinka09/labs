import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';
import { DbConnectService } from '../service/db-connect.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private dbConnectService: DbConnectService
  ) {} //передаем массив, роутинг, бд
  users = [];
  naming: string = ''; //инициализация переменных
  age: number = 3; //инициализация переменных
  id: number = 3; //инициализация переменных

  ngOnInit(): void {
    this.getData(); // Запись данных из БД в массив
  }

  async getData() {
    // Функция получения данных из БД
    try {
      this.users = await this.dbConnectService.getWorkers();
    } catch (err) {
      console.log(err);
    }
  }
}
