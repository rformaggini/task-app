import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaFormComponent } from './tarefas-form.component';

describe('TarefasFormComponent', () => {
  let component: TarefaFormComponent;
  let fixture: ComponentFixture<TarefaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
