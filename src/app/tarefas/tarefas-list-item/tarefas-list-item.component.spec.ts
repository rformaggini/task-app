import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasListItemComponent } from './tarefas-list-item.component';

describe('TarefasListItemComponent', () => {
  let component: TarefasListItemComponent;
  let fixture: ComponentFixture<TarefasListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
