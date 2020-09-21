import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atividade } from './atividade';
import { Tarefa } from './tarefa';

import {  } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly API = 'http://localhost:8080/tarefas';

  atividades: Atividade[] = [
    {id: 1, descricao: "Atividade 1", status: false, tarefaId: 1 },
    {id: 2, descricao: "Atividade 2 ", status: false, tarefaId: 1 }
  ]

  tarefas:Tarefa[] = [
    {id: 1, descricao: 'Tarefas do Trabalho', atividades: this.atividades},
    {id: 2, descricao: 'Tarefas de casa', atividades: this.atividades}
  ]
  
  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<Tarefa[]>(this.API);
      
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
