import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyWorker, MyWorkerType } from './shared/worker.model';
import { TestsrvService } from './services/testsrv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Список сотрудников';
  workers: MyWorker[]; //сразу не заполняем данные, а делаем индендификацию переменных
  myWorkerType = MyWorkerType;
  workerEdit: any;
  id: any;
  name: any;
  surname: any;
  phone: any;
  modal = false;
  mask: Array<string | RegExp>;
  editForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    phone: new FormControl(''),
    id: new FormControl(''),
  }); //инициализация формы через класс FormGroup

  constructor(
    private testsrvService: TestsrvService //инициализируем переменную класса
  ) {}

  ngOnInit(): void {
    this.getData(); //записываем значение из бд в массив
    this.mask = [
      '(',
      /[1-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
    //маска
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }
  onEditById(worker) {
    //когда нажимаем на кнопку Редактировать
    this.workerEdit = worker; //в переменную workerEdit записываем объект пользователя
    this.modal = !this.modal; //открываем модальное окно
    this.name = this.workerEdit.name; //записываем имя пользователя
    this.surname = this.workerEdit.surname; //записываем фамилию пользователя
    this.phone = this.workerEdit.phone; //записываем телефон пользователя
    this.id = this.workerEdit.id; //записываем id пользователя
  }
  onEditData() {
    //когда нажимаем применить
    for (let i = 0; i < this.workers.length; i++) {
      //цикл, котороый пробегается по всему массиву workers
      if (this.workers[i].id == this.editForm.get('id').value) {
        //берет id из формы и ищет пользователя по id в массиве
        this.workers[i].name = this.name; //если нашел, то заменяет ему имя в input
        this.workers[i].surname = this.surname; //здесь изменяет фамилию
        this.workers[i].phone = this.phone; //здесь изменяет телефон
        this.updateData(this.workers[i]); //здесь обновляем данные в бд
        break; //останавливает цикл
      }
    }
    this.modal = !this.modal; //закрываем модальное окно
  }
  onClose(): void {
    //функция закрытия модального окна
    this.modal = !this.modal;
  }

  async onAddWorker(worker) {
    //добавление в бд
    let id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0; //получаем аолседний элемент массива, и к его id + 1
    worker.id = id; //меняем worker id
    this.workers.push(worker); //добавляем в массив, который у нас не в бд, данные, которые мы указали в форме (имя, номер и тд)
    await this.testsrvService.postWorkers(worker); //добавляем уже в бд этот объект
    this.getData(); //перезапись массива из бд
  }

  async getData() {
    // возврат данных в массива из бд
    try {
      this.workers = await this.testsrvService.getWorkers(); //await позволяет переобразовать данные из промиса
    } catch (err) {
      //ошибка в консоли, если не получается подключиться к бд
      console.log(err);
    }
  }

  async updateData(data: MyWorker) {
    //обновляем данные в бд, data: MyWorker - это объект
    try {
      await this.testsrvService.rewriteWorkers(data); //посылаем запрос
    } catch (err) {
      //ошибка в консоли, если не получается подключиться к бд
      console.log(err);
    }
  }
}
