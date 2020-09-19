import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefas';
import { TarefasService } from '../shared/tarefas.service';

@Component({
  selector: 'app-tarefas-list',
  templateUrl: './tarefas-list.component.html',
  styleUrls: ['./tarefas-list.component.css']
})
export class TarefasListComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefasService: TarefasService) { }

  ngOnInit() {
    this.tarefas = this.tarefasService.getAll();
  }
  remover(tarefa: Tarefa){

  }

}
