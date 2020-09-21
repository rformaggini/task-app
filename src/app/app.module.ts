import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaListComponent } from './tarefas/tarefas-list/tarefas-list.component';
import { TarefaFormComponent } from './tarefas/tarefas-form/tarefas-form.component';
import { FormsModule } from '@angular/forms';
import { AtividadeListItemComponent } from './tarefas/atividade-list-item/atividade-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaListComponent,
    TarefaFormComponent,
    AtividadeListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
