import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbConnectService {

  routeApi = 'http://localhost:3000/workers';
  constructor(private http: HttpClient) {}

  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise(); // Получение всех пользователей
  }

  postWorkers(data: User) {
    return this.http.post(this.routeApi, data).toPromise(); // Добавление пользователей
  }
  rewriteWorkers(data: User){
    return this.http.put(this.routeApi + "/" + data.id, data).toPromise(); // Перезапись пользователей
  }
  deleteWorkers(data: number){
    return this.http.delete(this.routeApi + "/" + data).toPromise(); // Удаление пользователей
  }
}
export interface User { // Интерфейс пользователя
  id?: number;
  surname?: string;
  name?: string;
  lastname?: string;
  phone?: string;
  email?: string;
  birthday?: string;
  place?: number;
}