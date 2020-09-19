import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasFormComponent } from './tarefas/tarefas-form/tarefas-form.component';
import { TarefasListComponent } from './tarefas/tarefas-list/tarefas-list.component';


const routes: Routes = [
  {path: '', component: TarefasListComponent},
  {path: 'new', component: TarefasFormComponent},
  {path: 'edit/:id', component: TarefasFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
