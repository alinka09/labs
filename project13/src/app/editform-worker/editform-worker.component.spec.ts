import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformWorkerComponent } from './editform-worker.component';

describe('EditformWorkerComponent', () => {
  let component: EditformWorkerComponent;
  let fixture: ComponentFixture<EditformWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditformWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditformWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
