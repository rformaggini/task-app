import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefas';

@Component({
  selector: 'app-tarefas-list-item',
  templateUrl: './tarefas-list-item.component.html',
  styleUrls: ['./tarefas-list-item.component.css']
})
export class TarefasListItemComponent implements OnInit {

  @Input()
  tarefa: Tarefa;

  constructor() { }

  ngOnInit() {
  }

}
