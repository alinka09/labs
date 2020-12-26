import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css'],
})
export class EditformWorkerComponent implements OnInit {
  @Input() user: any;
  user_test: object;
  editForm = new FormGroup({
    name: new FormControl('', [Validators.required]), //валидация данных
    surname: new FormControl('', [Validators.required]), //валидация данных
    phone: new FormControl('', [Validators.required]), //валидация данных
    id: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
  onEditData() {
    console.log(this.user);
  }
}
