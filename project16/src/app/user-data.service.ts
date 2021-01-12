import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  //инициализируем массив пользователей
  users = [
    {
      id: 0,
      surname: 'Иванов',
      name: 'Иван',
      lastname: 'Иванович',
      phone: '+7-123-456-78-90',
      email: 'mail1@mail.ru',
      birthday: '2001-01-01',
      place: 0,
    },
    {
      id: 1,
      surname: 'Федоров',
      name: 'Федор',
      lastname: 'Федорович',
      phone: '+7-111-222-33-33',
      email: 'mail2@mail.ru',
      birthday: '2002-02-02',
      place: 0,
    },
    {
      id: 2,
      surname: 'Петров',
      name: 'Петр',
      lastname: 'Петрович',
      phone: '+7-222-222-22-22',
      email: 'mail3@mail.ru',
      birthday: '2003-03-03',
      place: 1,
    },
    {
      id: 3,
      surname: 'Олегов',
      name: 'Олег',
      lastname: 'Олегович',
      phone: '+7-333-333-33-33',
      email: 'mail4@mail.ru',
      birthday: '2004-04-04',
      place: 1,
    },
    {
      id: 4,
      surname: 'Максимов',
      name: 'Максим',
      lastname: 'Максимович',
      phone: '+7-444-444-44-44',
      email: 'mail5@mail.ru',
      birthday: '2005-05-05',
      place: 2,
    },
    {
      id: 5,
      surname: 'Сергеев',
      name: 'Сергей',
      lastname: 'Сергеевич',
      phone: '+7-444-444-44-44',
      email: 'sample6@mail.ru',
      birthday: '2006-01-06',
      place: 2,
    },
    {
      id: 6,
      surname: 'Никитов',
      name: 'Никита',
      lastname: 'Никитич',
      phone: '+7-666-666-66-66',
      email: 'mail7@mail.ru',
      birthday: '2007-07-07',
      place: 3,
    },
    {
      id: 7,
      surname: 'Степанов',
      name: 'Степан',
      lastname: 'Степанович',
      phone: '+7-122-122-12-12',
      email: 'mail8@mail.ru',
      birthday: '2008-08-08',
      place: 3,
    },
  ];

  constructor() {}

  putItemById(
    id: number,
    surname: string,
    name: string,
    lastname: string,
    phone: string,
    email: string,
    birthday: string,
    place: number
  ) {
    //добавление данных в массив
    this.users.map((users) => {
      if (users.id === id) {
        //сравниваем id и заменяем данные
        users.surname = surname;
        users.name = name;
        users.lastname = lastname;
        users.phone = phone;
        users.email = email;
        users.birthday = birthday;
        users.place = place;
      }
    });
  }

  getItemById(id: number) {
    //получение объекта из массива по id
    return this.users.find((users) => users.id === id); //возвращает объект
  }

  getItems() {
    //получение массива
    return this.users; //возвращает массив
  }
}
