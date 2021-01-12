import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  id: number = 0; //инициализация переменных

  users: any[] = []; //инициализация массива

  user: any = {}; //инициализация объекта

  userForm: FormGroup = new FormGroup({}); //инициализация формы

  constructor(
    private activatedRouter: ActivatedRoute,
    private userDataService: UserDataService,
    private router: Router
  ) {
    //передача роутинга и массива с объектами
    this.users = userDataService.users; //передача массива в переменную
  }

  ngOnInit(): void {
    //получаем id пользователя из адресной строки
    this.activatedRouter.params.subscribe((param) => {
      this.id = param.id;
    });
    for (let i = 0; i < this.users.length; i++) {
      //ищем пользователя по id и добавляем объект в переменную user
      if (this.id == this.users[i].id) {
        this.user = this.users[i];
        break;
      }
    }
    this.userForm = new FormGroup({
      surname: new FormControl(this.user.surname, [Validators.required]), //заполняем инпуты
      name: new FormControl(this.user.name, [Validators.required]),
      lastname: new FormControl(this.user.lastname, [Validators.required]),
      phone: new FormControl(this.user.phone, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required]),
      birthday: new FormControl(this.user.birthday, [Validators.required]),
      place: new FormControl(this.user.place, [Validators.required]),
    });
  }

  userEditData() {
    //редактируем данные в массиве
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == this.id) {
        //ищеп пользователя по id
        this.users[i].surname = this.userForm.get('surname')?.value; //заменыем данные, полученные в инпутах
        this.users[i].name = this.userForm.get('name')?.value;
        this.users[i].lastname = this.userForm.get('lastname')?.value;
        this.users[i].phone = this.userForm.get('phone')?.value;
        this.users[i].email = this.userForm.get('email')?.value;
        this.users[i].birthday = this.userForm.get('birthday')?.value;
        this.users[i].place = parseInt(this.userForm.get('place')?.value);
        break;
      }
    }
    this.router.navigateByUrl('/user'); //переадресация к списку пользователей
  }
  userDeleteData(id: number) {
    //удаляем объект по id
    this.users.splice(id, 1);
    this.router.navigateByUrl('/user'); //переадресация к списку пользователей
  }
}
