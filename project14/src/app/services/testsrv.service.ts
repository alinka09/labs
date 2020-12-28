import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWorker } from '../shared/worker.model';

@Injectable({
  providedIn: 'root',
})
export class TestsrvService {
  routeApi = 'http://localhost:3000/workers'; //ссылка на json сервер
  constructor(private http: HttpClient) {}

  getWorkers(): Promise<any> {
    //получаем данные из бд json формата
    return this.http.get(this.routeApi).toPromise(); //возвращает промис с данными
  }

  postWorkers(data: MyWorker) {
    //добавление данных
    return this.http.post(this.routeApi, data).toPromise();
  }
  rewriteWorkers(data: MyWorker) {
    //перезапись данных
    return this.http.put(this.routeApi + '/' + data.id, data).toPromise();
  }
}
