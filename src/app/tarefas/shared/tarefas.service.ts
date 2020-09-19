import { Injectable } from '@angular/core';
import { Tarefa } from './tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  tarefas:Tarefa[] = [
    {id: 1, descricao: 'Tarefa 1',dataInclusao:'18/09/2020', status: true},
    {id: 2, descricao: 'Tarefa 2',dataInclusao:'18/09/2020', status: false},
    {id: 3, descricao: 'Tarefa 3',dataInclusao:'18/09/2020', status: true},
    {id: 4, descricao: 'Tarefa 4',dataInclusao:'18/09/2020', status: false},
    {id: 5, descricao: 'Tarefa 5',dataInclusao:'18/09/2020', status: true}
  ]
  
  constructor() { }

  getAll(){
    return this.tarefas;
  }


}
