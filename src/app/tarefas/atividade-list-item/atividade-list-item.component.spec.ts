import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeListItemComponent } from './atividade-list-item.component';

describe('AtividadeListItemComponent', () => {
  let component: AtividadeListItemComponent;
  let fixture: ComponentFixture<AtividadeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
