import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css'],
})
export class AddUserFormComponent implements OnInit {
  userForm: FormGroup = new FormGroup({}); //инициализируем форму

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {} //импортируем массив с пользователями и роутинг

  ngOnInit(): void {
    //инициализируем инпуты в форме
    this.userForm = new FormGroup({
      surname: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      place: new FormControl('', [Validators.required]),
    });
  }

  addUserData() {
    //добавляем данные в массив
    let obj = {} as Data; //инициfkbpbhetv объект, чтобы появились нужные поля и в них передаем данные
    obj.id =
      this.userDataService.users[this.userDataService.users.length - 1].id + 1; //передача данных 40-47 строка
    obj.surname = this.userForm.get('surname')?.value;
    obj.name = this.userForm.get('name')?.value;
    obj.lastname = this.userForm.get('lastname')?.value;
    obj.phone = this.userForm.get('phone')?.value;
    obj.email = this.userForm.get('email')?.value;
    obj.birthday = this.userForm.get('birthday')?.value;
    obj.place = parseInt(this.userForm.get('place')?.value);
    this.userDataService.users.push(obj); //добавляем данные 48-55 строка
    this.userForm.get('surname')?.setValue(''); //setValue - обнуляем все значения в инпутах
    this.userForm.get('name')?.setValue('');
    this.userForm.get('lastname')?.setValue('');
    this.userForm.get('phone')?.setValue('');
    this.userForm.get('email')?.setValue('');
    this.userForm.get('birthday')?.setValue('');
    this.userForm.get('place')?.setValue('');
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
