import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {} //передаем массив  и роутинг
  users = this.userDataService.getItems(); //получаем массив
  naming: string = ''; //инициализация переменных
  age: number = 3; //инициализация переменных
  id: number = 3; //инициализация переменных

  ngOnInit(): void {}
}
