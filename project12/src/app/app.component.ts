import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;
  workerEdit: any;
  name: any;
  surname: any;
  modal = false;

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    //функция удаление
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
  }
  onEditData(worker) {
    //когда нажимаем применить
    for (let i = 0; i < this.workers.length; i++) {
      //цикл, котороый пробегается по всему массиву workers
      if (this.workers[i].id == worker.id) {
        //ищет пользователя по id
        this.workers[i].name = this.name; //если нашел, то заменяет ему имя в input
        this.workers[i].surname = this.surname; //здесь изменяет фамилию
        break; //останавливает цикл
      }
    }
    this.modal = !this.modal; //закрываем модальное окно
  }
  onClose(): void {
    //функция закрытия модального окна
    this.modal = !this.modal;
  }

  onAddWorker(worker) {
    //получаем данные пользователя
    let id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0; //получаем аолседний элемент массива, и к его id + 1
    worker.id = id; //меняем worker id
    this.workers.push(worker); //пушим массив
  }
}
