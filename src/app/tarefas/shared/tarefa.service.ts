import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

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
  getById(id: number){
    const tarefa = this.tarefas.find(value => {value.id == id})
    return tarefa;
  }
  save(tarefa: Tarefa){
    if(tarefa.id){

    }else{

    }
  }

}
