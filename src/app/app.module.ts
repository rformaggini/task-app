import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasListComponent } from './tarefas/tarefas-list/tarefas-list.component';
import { TarefasListItemComponent } from './tarefas/tarefas-list-item/tarefas-list-item.component';
import { TarefasFormComponent } from './tarefas/tarefas-form/tarefas-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasListComponent,
    TarefasListItemComponent,
    TarefasFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
