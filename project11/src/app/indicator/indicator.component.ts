import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {
	cards: object[] = []; //инициализация объекта
  status: boolean = true; //активная или неактивная карточка

  constructor() { }
  delete(id: number) { //функция удаления карточки
    this.cards.splice(id, 1); //начиная с элемента, где находится id, удаляем 1 элемент
  }
  add(str: string, type: number) { //добавление карточки
    let card: Params = {}; //инициализируем объект с типами данных, которые указаны в interface
    card.name = str; //задаем имя карточки
    if(this.cards.length == 0){ //если длина массива  0
      card.id = 1; //задаем id карточки 1
    }else{ //иначе
      card.id = this.cards[this.cards.length-1].id+1; //задаем id карточки,посредством получения последнего элемента из массива, прибавляем его id единицу
    }
    if(type == 1){ //если тип карточки (активность/неактивность) равен 1
      card.status = true; //статус карточки активен
    }
    else{
      card.status = false; //иначе неактивен
		}
		this.cards.push(card); //добавляем карточку
  }
  ngOnInit(): void { //рандомная генерация карточек
    for(let i = 1; i < 11; i++){
      let card: Params = {}; //инициализируем объект
      card.status = Math.random() < 0.5; //рандомно выставляем статус true or false
      card.name = "Name" + i; //задаем имя карточки
      card.id = i; //задаем id
      this.cards.push(card); //добавляем объекты  в массив
    }
  }

}
export interface Params{
  id?: number;
  name?: string;
  status?: boolean;
}
