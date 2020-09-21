import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../shared/tarefa';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrls: ['./tarefas-form.component.css']
})
export class TarefaFormComponent implements OnInit {

  //tarefa: Tarefa = new Tarefa()
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tarefaService: TarefaService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      // usar Id para salvar a atividade
      this.tarefaService.getById(parseInt(id));
    }

  }
  salvar(){
    
  }

}
