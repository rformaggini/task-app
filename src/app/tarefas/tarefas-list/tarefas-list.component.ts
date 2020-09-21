import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Atividade } from '../shared/atividade';
import { Tarefa } from '../shared/tarefa';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-tarefas-list',
  templateUrl: './tarefas-list.component.html',
  styleUrls: ['./tarefas-list.component.css']
})
export class TarefaListComponent implements OnInit {
  
  novaTarefa : Tarefa
  tarefas: Tarefa[] = [];
  atividades: Atividade[] =[]
  tarefas$: Observable<Tarefa[]>
  

  constructor(private tarefasService: TarefaService) { }

  ngOnInit() {
    this.novaTarefa = new Tarefa();
    this.tarefasService.getAll().subscribe( dados =>  this.tarefas = dados );
   //this.tarefas$ = this.tarefasService.getAll();
  

  }

  onSubmit(){
    console.log(this.novaTarefa.descricao)
    this.novaTarefa.atividades = this.atividades;
    this.tarefas.push(this.novaTarefa);

    this.novaTarefa = new Tarefa();
    this.atividades = [];
  }

  remover(tarefa: Tarefa){
    // Excluir
  }
  atualizar(){
    // Não e necessario implementar
  }

}
