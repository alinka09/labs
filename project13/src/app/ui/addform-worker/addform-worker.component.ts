import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  mask: Array<string | RegExp>;
  workerForm = new FormGroup({
    name: new FormControl('', [Validators.required]), //валидация данных
    surname: new FormControl('', [Validators.required]), //валидация данных
    phone: new FormControl('', [Validators.required]), //валидация данных
    type: new FormControl('', [Validators.required]), //валидация данных
  });

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {
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
  }

  onAddWorker() {
    this.addWorker.emit({
      name: this.workerForm.get('name').value,
      surname: this.workerForm.get('surname').value,
      phone: this.workerForm.get('phone').value,
      type: this.workerForm.get('type').value,
    });
  }
}
