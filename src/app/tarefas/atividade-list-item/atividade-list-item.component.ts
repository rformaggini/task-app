import { Component, Input, OnInit } from '@angular/core';
import { Atividade } from '../shared/atividade';

@Component({
  selector: 'app-atividade-list-item',
  templateUrl: './atividade-list-item.component.html',
  styleUrls: ['./atividade-list-item.component.css']
})
export class AtividadeListItemComponent implements OnInit {

  @Input()
  atividades:Atividade[]

  constructor() { }

  ngOnInit() {
  }

  remover(){

  }

}
