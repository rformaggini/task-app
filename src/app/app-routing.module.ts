import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaFormComponent } from './tarefas/tarefas-form/tarefas-form.component';
import { TarefaListComponent } from './tarefas/tarefas-list/tarefas-list.component';


const routes: Routes = [
  {path: '', component: TarefaListComponent},
  {path: 'new/:id', component: TarefaFormComponent},
  {path: 'edit/:id', component: TarefaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
